from flask import Flask, request, jsonify
from flask_cors import CORS
from selenium import webdriver
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)  # Enable CORS for all origins

@app.route('/run_selenium_script', methods=['POST'])
def run_selenium_script():
    query = request.json.get('query')
    driver = webdriver.Firefox()
    try:
        driver.get(f'{query}')
        html_content = driver.page_source
        soup = BeautifulSoup(html_content, 'html.parser')
        problem_statement = soup.find(class_='problem-statement')
        if problem_statement:
            return str(problem_statement)
        else:
            return jsonify({'error': 'Problem statement not found'})
    finally:
        driver.quit()

if __name__ == '__main__':
    app.run(debug=True)
