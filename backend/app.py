from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)  # Allows React frontend to communicate with Flask backend

API_KEY = 'IYH7Y43T.4YbtHmITbYV1FCW7qJLc1BYezcHzXCi9'
FOOD_DETECTION_URL = "https://vision.foodvisor.io/api/1.0/en/analysis/"

# API endpoint to handle image upload and classification
@app.route('/api/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400
    
    image = request.files['image']

    # Save the image temporarily
    image_path = os.path.join('uploads', image.filename)
    image.save(image_path)
    
    headers = {"Authorization": f"Api-Key {"IYH7Y43T.4YbtHmITbYV1FCW7qJLc1BYezcHzXCi9"}"}
    try:
        with open(image_path, "rb") as img:
            response = requests.post(FOOD_DETECTION_URL, headers=headers, files={"image": img})
            response.raise_for_status()
            data = response.json()
            print("hello")
            # Debug: Print the raw response
            print("API Response:", data)
            
            # Extract relevant information
            items = data.get('items', [])
            result = []
            for item in items:
                food_item = item.get('food', [])[0] if item.get('food') else {}
                food_info = food_item.get('food_info', {})
                result.append({
                    "name": food_info.get('display_name', 'Unknown'),
                    "calories": food_info.get('nutrition', {}).get('calories_100g', 0) * food_item.get('quantity', 0) / 100
                })
            
            return jsonify(result), 200
    
    except requests.RequestException as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    os.makedirs('uploads', exist_ok=True)  # Create uploads folder if not exists
    app.run(debug=True)
