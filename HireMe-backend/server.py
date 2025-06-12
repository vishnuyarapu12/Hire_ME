from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from werkzeug.utils import secure_filename
import docx
from docx import Document
import spacy
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import nltk
from nltk.corpus import stopwords
import re

app = Flask(__name__)
CORS(app)

# Upload folder setup
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# External job API
API_URL = "api_key"

# NLTK + spaCy setup
nltk.download('stopwords')
nltk.download('punkt')
nlp = spacy.load('en_core_web_sm')

# Resume utilities
def extract_text_from_docx(file_path):
    doc = docx.Document(file_path)
    return ' '.join([p.text for p in doc.paragraphs])

def preprocess_text(text):
    text = re.sub(r'<.*?>', ' ', text)            # Remove HTML tags like <br>
    text = re.sub(r'[^a-zA-Z\s]', ' ', text)      # Remove punctuation, special chars
    text = re.sub(r'\s+', ' ', text).strip()      # Normalize whitespace
    return text.upper()


def analyze_resume_format(resume_text):
    suggestions = []
    sections = ['experience', 'education', 'skills', 'summary', 'objective']
    if missing := [s for s in sections if s not in resume_text.lower()]:
        suggestions.append(f"Consider adding: {', '.join(missing)}")
    if not any(char in resume_text for char in ['•', '-', '*']):
        suggestions.append("Use bullet points for readability")
    if sum(v in resume_text.lower() for v in ['managed', 'led', 'developed', 'created', 'implemented', 'achieved', 'improved']) < 3:
        suggestions.append("Add more action verbs to highlight achievements")
    if not re.search(r'\d+', resume_text):
        suggestions.append("Include quantifiable results (e.g., 'increased sales by 20%')")
    return suggestions

def analyze_keywords(resume_text, job_description):
    jd_cleaned = preprocess_text(job_description)
    resume_cleaned = preprocess_text(resume_text)

    # Re-parse with spaCy after preprocessing
    jd_doc = nlp(jd_cleaned)
    resume_doc = nlp(resume_cleaned)

    jd_keywords = [token.text for token in jd_doc if token.pos_ in ['NOUN', 'PROPN'] and not token.is_stop]
    resume_keywords = [token.text for token in resume_doc if token.pos_ in ['NOUN', 'PROPN'] and not token.is_stop]

    return ', '.join(sorted(set(jd_keywords) - set(resume_keywords)))





def calculate_ats_score(resume_text, job_description):
    resume_processed = preprocess_text(resume_text)
    jd_processed = preprocess_text(job_description)
    tfidf_matrix = TfidfVectorizer(stop_words='english').fit_transform([resume_processed, jd_processed])
    similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
    
    # Scale to 0–1000 for granularity
    raw_score = round(similarity * 1000, 2)

    # Custom logic: if above 100, compress for normalization
    return round(raw_score / 3, 2) if raw_score >= 100 else raw_score


# Resume analysis route
@app.route('/analyze', methods=['POST'])
def analyze_resume():
    if 'resume' not in request.files:
        return jsonify({'error': 'No resume file provided'}), 400
    resume_file = request.files['resume']
    job_description = request.form.get('job_description', '')
    if resume_file.filename == '' or not resume_file.filename.endswith('.docx'):
        return jsonify({'error': 'Invalid file. Upload a .docx resume'}), 400

    file_path = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(resume_file.filename))
    resume_file.save(file_path)
    resume_text = extract_text_from_docx(file_path)

    ats_score = calculate_ats_score(resume_text, job_description)
    format_suggestions = analyze_resume_format(resume_text)
    keyword_gaps = analyze_keywords(resume_text, job_description)

    return jsonify({
            'atsScore': ats_score,
            'formatSuggestions': format_suggestions,
            'missingKeywords': keyword_gaps
})


# Job scraping API route
@app.route('/api/jobs', methods=['GET'])
def get_jobs():
    try:
        return jsonify(requests.get(API_URL).json())
    except requests.RequestException as e:
        return jsonify({"error": str(e)}), 500

# Filter frontend jobs
@app.route('/api/jobs/frontend', methods=['GET'])
def get_frontend_jobs():
    try:
        jobs = requests.get(API_URL).json()
        return jsonify([job for job in jobs if "frontend" in (job.get("title") or job.get("jobTitle") or "").lower()])
    except requests.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)