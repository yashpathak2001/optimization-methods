# Optimization Methods Visualizer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-5.0+-green.svg)](https://www.djangoproject.com/)

An interactive web-based visualization tool for learning and understanding optimization algorithms, particularly shortest path algorithms like Bellman-Ford and relaxation methods. This tool is designed to help students visualize algorithm execution step-by-step.

## 🌟 Features

- **Interactive Graph Builder**: Create custom graphs with nodes and weighted edges
- **Step-by-Step Visualization**: Watch algorithms execute one step at a time
- **Multiple Algorithms**: 
  - Single-Source Shortest Path (Relaxation)
  - Bellman-Ford Algorithm
  - Bellman-Ford with FIFO Queue
  - *More algorithms added weekly as per course schedule*
- **Parent Subgraph Tree**: Visualize the shortest path tree rooted at the source node
- **Code Generation**: View algorithm implementations in multiple programming languages
- **Resizable Panels**: Customize your workspace layout
- **Zoom Controls**: Zoom in/out on graphs for better visibility
- **Export/Import**: Save and load graph configurations

## 📚 Course Integration

This repository is updated weekly to align with the course schedule. New algorithms and features are added progressively to match the learning curriculum.

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yashpathak2001/optimization-methods.git
   cd optimization-methods
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv
   
   # On macOS/Linux:
   source venv/bin/activate
   
   # On Windows:
   venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

6. **Open your browser:**
   Navigate to `http://127.0.0.1:8000` or `http://localhost:8000`

## 📖 Usage Guide

### Building a Graph

1. Use the **Graph Builder** panel to add nodes and edges
2. Enter node labels (optional) and click "+ Node"
3. Add edges by specifying source, destination, and weight
4. Use preset graphs from the dropdown menu for quick examples

### Running Algorithms

1. Select a **source node** from the dropdown
2. Choose an **algorithm** from the options
3. Click **"Auto Play"** to run automatically or use **"Next"** to step through manually
4. Watch the visualization update in real-time

### Understanding the Visualization

- **Left Panel**: Shows the parent subgraph tree, step information, and algorithm tables
- **Middle Panel**: Interactive graph builder and main visualization
- **Right Panel**: Pseudo-code and code implementations in various languages

### Controls

- **Zoom**: Use +/- buttons to zoom in/out on graphs
- **Resize**: Drag panel borders to resize
- **Center**: Click "Center" to fit the graph in view
- **Export/Import**: Save your graphs as JSON files

## 🛠️ Development

### Project Structure

```
optimization-methods/
├── optimization_site/      # Django project settings
├── visualizer/            # Main application
│   ├── static/
│   │   └── visualizer/    # CSS and JavaScript
│   ├── templates/         # HTML templates
│   └── views.py          # Django views
├── manage.py             # Django management script
└── requirements.txt       # Python dependencies
```

### Adding New Algorithms

New algorithms are added weekly. To contribute an algorithm implementation:

1. Fork the repository
2. Create a new branch for your algorithm
3. Follow the existing code structure
4. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 🐛 Reporting Issues

Found a bug or have a suggestion? Please [open an issue](https://github.com/YOUR_USERNAME/optimization-methods/issues/new/choose) using our issue templates.

## 🤝 Contributing

Contributions are welcome! Whether it's:
- Bug fixes
- New algorithm implementations
- UI/UX improvements
- Documentation updates
- Feature suggestions

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍🏫 For Instructors

This tool is designed to complement course lectures on optimization methods. The visualization helps students:

- Understand algorithm execution flow
- See how data structures change during execution
- Compare different algorithm approaches
- Debug their own implementations

### Weekly Updates

The repository is updated weekly to match the course schedule. Each week may include:
- New algorithm implementations
- Enhanced visualizations
- Bug fixes and improvements
- Additional examples and presets

## 📧 Contact

For questions or support, please open an issue on GitHub.

## 🙏 Acknowledgments

- Built with [Django](https://www.djangoproject.com/)
- Visualization powered by [vis-network](https://visjs.github.io/vis-network/)
- Inspired by the need for better algorithm visualization tools in education

---

**Happy Learning! 🎓**
