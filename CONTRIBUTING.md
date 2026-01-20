# Contributing to Optimization Methods Visualizer

Thank you for your interest in contributing! This project welcomes contributions from students, educators, and developers. This guide will help you get started.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please [open an issue](https://github.com/YOUR_USERNAME/optimization-methods/issues/new?template=bug_report.md) using our bug report template. Include:

- A clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (browser, OS, Python version)

### Suggesting Features

Have an idea for a new feature? [Open a feature request](https://github.com/YOUR_USERNAME/optimization-methods/issues/new?template=feature_request.md) and describe:

- The problem you're trying to solve
- Your proposed solution
- Any alternatives you've considered

### Adding Algorithms

New algorithms are added weekly as per the course schedule. To contribute an algorithm:

1. Check existing issues to see if it's already planned
2. Fork the repository
3. Create a feature branch: `git checkout -b feature/algorithm-name`
4. Implement the algorithm following the existing structure
5. Add tests if applicable
6. Update documentation
7. Submit a pull request

### Code Contributions

1. **Fork the repository**
   ```bash
   git clone https://github.com/yashpathak2001/optimization-methods.git
   cd optimization-methods
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Keep functions focused and small
   - Test your changes locally

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
   
   Use clear, descriptive commit messages:
   - `Add Dijkstra's algorithm implementation`
   - `Fix zoom controls in parent subgraph`
   - `Update README with installation instructions`

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template
   - Wait for review

## 📋 Code Style Guidelines

### Python

- Follow PEP 8 style guide
- Use meaningful variable names
- Add docstrings for functions and classes
- Keep functions focused on a single task

### JavaScript

- Use modern ES6+ syntax
- Use meaningful variable and function names
- Add comments for complex algorithms
- Follow existing code structure

### HTML/CSS

- Use semantic HTML
- Follow BEM naming convention for CSS classes
- Keep styles organized and commented

## 🧪 Testing

Before submitting a pull request:

1. Test your changes locally
2. Ensure the development server runs without errors
3. Test in multiple browsers (Chrome, Firefox, Safari)
4. Check that existing features still work

## 📝 Pull Request Process

1. Update the README.md if needed
2. Update documentation for new features
3. Ensure your code follows the style guidelines
4. Make sure all tests pass
5. Request review from maintainers

### PR Template

When opening a PR, include:

- **Description**: What changes does this PR make?
- **Type**: Bug fix, feature, documentation, etc.
- **Testing**: How was this tested?
- **Screenshots**: If applicable
- **Related Issues**: Link to related issues

## 🎯 Areas for Contribution

### High Priority

- New algorithm implementations
- Bug fixes
- Performance improvements
- Documentation improvements

### Medium Priority

- UI/UX enhancements
- Additional graph presets
- Code generation for more languages
- Accessibility improvements

### Low Priority

- Code refactoring
- Test coverage
- Performance optimizations
- Translation/localization

## 📚 Algorithm Implementation Guide

When adding a new algorithm:

1. **Study existing implementations** in `app.js`
2. **Follow the pattern**:
   - Define algorithm steps
   - Create step-by-step visualization
   - Add pseudo-code
   - Add code generation for multiple languages
   - Update algorithm selector

3. **Key files to modify**:
   - `visualizer/static/visualizer/app.js` - Main algorithm logic
   - `visualizer/templates/visualizer/index.html` - UI elements
   - `visualizer/static/visualizer/styles.css` - Styling (if needed)

4. **Example structure**:
   ```javascript
   function runYourAlgorithm(nodes, edges, source) {
     const steps = [];
     // Algorithm implementation
     // Each step should be added to steps array
     return steps;
   }
   ```

## 🐛 Debugging Tips

- Use browser developer tools (F12)
- Check the browser console for errors
- Test with simple graphs first
- Verify data structures match expected format

## 📖 Documentation

When adding features:

- Update README.md if it's a user-facing feature
- Add code comments for complex logic
- Update inline documentation
- Consider adding examples

## ❓ Questions?

- Open an issue with the `question` label
- Check existing issues and discussions
- Review the code comments

## 🙏 Recognition

Contributors will be:
- Listed in the README (if desired)
- Credited in commit messages
- Acknowledged in release notes

Thank you for contributing to making this tool better for students learning optimization methods! 🎓
