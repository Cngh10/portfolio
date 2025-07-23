from flask import Flask, render_template, request, redirect, url_for, flash
import os

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'

# Sample data - in a real app, this would come from a database
projects = [
    {
        'id': 1,
        'title': 'Project One',
        'description': 'A responsive web application built with Python and Flask',
        'image': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
        'tags': ['Python', 'Flask', 'SQLAlchemy', 'Bootstrap'],
        'github_url': '#',
        'live_url': '#',
        'slug': 'project-one',
        'overview': 'This is a detailed description of Project One. It showcases modern web development practices using Python and Flask.',
        'process': 'The development process involved careful planning, iterative development, and thorough testing.',
        'features': [
            'Responsive design that works on all devices',
            'User authentication and authorization',
            'RESTful API endpoints',
            'Database integration with SQLAlchemy'
        ]
    },
    {
        'id': 2,
        'title': 'Project Two',
        'description': 'A data analysis dashboard with interactive visualizations',
        'image': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        'tags': ['Python', 'Django', 'Pandas', 'Plotly'],
        'github_url': '#',
        'live_url': '#',
        'slug': 'project-two',
        'overview': 'A comprehensive data analysis platform built with Django and modern visualization libraries.',
        'process': 'This project involved data collection, cleaning, analysis, and creating interactive visualizations.',
        'features': [
            'Interactive data visualizations',
            'Real-time data processing',
            'Export functionality for reports',
            'User dashboard with customizable widgets'
        ]
    },
    {
        'id': 3,
        'title': 'Project Three',
        'description': 'A machine learning model deployment platform',
        'image': 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop',
        'tags': ['Python', 'FastAPI', 'TensorFlow', 'Docker'],
        'github_url': '#',
        'live_url': '#',
        'slug': 'project-three',
        'overview': 'A platform for deploying and managing machine learning models in production.',
        'process': 'Built using FastAPI for high performance and Docker for containerization.',
        'features': [
            'Model versioning and management',
            'API endpoints for predictions',
            'Monitoring and logging',
            'Scalable deployment with Docker'
        ]
    }
]

skills = [
    {
        'category': 'Backend Development',
        'icon': 'server',
        'skills': ['Python', 'Flask', 'Django', 'FastAPI', 'SQLAlchemy', 'PostgreSQL']
    },
    {
        'category': 'Data Science',
        'icon': 'chart',
        'skills': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow']
    },
    {
        'category': 'Web Technologies',
        'icon': 'globe',
        'skills': ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Jinja2', 'RESTful APIs']
    },
    {
        'category': 'DevOps',
        'icon': 'code',
        'skills': ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Heroku', 'Linux']
    },
    {
        'category': 'Database',
        'icon': 'database',
        'skills': ['PostgreSQL', 'SQLite', 'MongoDB', 'Redis', 'Database Design']
    },
    {
        'category': 'Tools & Others',
        'icon': 'tool',
        'skills': ['Jupyter', 'VS Code', 'Postman', 'Testing', 'Agile Methodology']
    }
]

testimonials = [
    {
        'name': 'Sarah Johnson',
        'role': 'CEO at TechStart',
        'quote': 'Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations.',
        'avatar': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    },
    {
        'name': 'Michael Chen',
        'role': 'Product Manager at InnovateCorp',
        'quote': 'I was impressed by their technical skills and problem-solving abilities. They delivered exactly what we needed.',
        'avatar': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
    },
    {
        'name': 'Emily Rodriguez',
        'role': 'Marketing Director at GrowthLabs',
        'quote': 'Their work on our data analysis platform was exceptional. We saw immediate improvements in our workflow.',
        'avatar': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
    }
]

@app.route('/')
def home():
    return render_template('index.html', projects=projects, skills=skills, testimonials=testimonials)

@app.route('/projects/<slug>')
def project_detail(slug):
    project = next((p for p in projects if p['slug'] == slug), None)
    if not project:
        return render_template('404.html'), 404
    return render_template('project_detail.html', project=project)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        
        # In a real application, you would send an email or save to database
        print(f"Contact form submission:")
        print(f"Name: {name}")
        print(f"Email: {email}")
        print(f"Subject: {subject}")
        print(f"Message: {message}")
        
        flash('Thank you for your message! I\'ll get back to you soon.', 'success')
        return redirect(url_for('home') + '#contact')
    
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
