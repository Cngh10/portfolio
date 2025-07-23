#!/usr/bin/env python3
"""
Script to run the Flask portfolio website
"""

import os
import sys
from app import app

if __name__ == '__main__':
    # Set environment variables
    os.environ['FLASK_APP'] = 'app.py'
    os.environ['FLASK_ENV'] = 'development'
    
    print("Starting Flask Portfolio Website...")
    print("Visit: http://localhost:5000")
    print("Press Ctrl+C to stop the server")
    
    try:
        app.run(debug=True, host='0.0.0.0', port=5000)
    except KeyboardInterrupt:
        print("\nServer stopped.")
        sys.exit(0)
