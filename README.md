# 🚀 CRM Automation Testing Framework

## 📌 Project Overview
This project is an End-to-End (E2E) Automation Testing Framework developed for the CRM (Customer Relationship Management) application using JavaScript and Playwright. The framework automates major CRM workflows to ensure functionality, reliability, and performance. It includes test coverage for modules such as Login, Deal Management, Email Draft, Import, Profile Management, AI Agent features, and Sign Out functionality.

---

## 🛠️ Tech Stack
- Programming Language: JavaScript  
- Automation Framework: Playwright  
- Test Runner: Playwright Test  
- Reporting Tool: Playwright HTML Reports  
- IDE: Visual Studio Code  
- Version Control: Git & GitHub  

---

## 📂 Project Structure

```
CRM/
│
├── .github/              # GitHub workflows & CI/CD configs
├── .vscode/              # VS Code settings
├── e2e/                  # End-to-End test configurations
├── node_modules/         # Project dependencies
├── playwright/           # Playwright configs & setup
├── screenshots/          # Captured screenshots for failed tests
├── test-results/         # Test execution reports
│
├── tests/                # Main test suite
│   ├── AI Agent/         # AI-related test cases
│   ├── Basic Script/     # Basic automation scripts
│   ├── common/           # Reusable utilities & helpers
│   ├── Dashboard/        # Dashboard module tests
│   ├── Deal/             # Deal-related test cases
│   ├── Email Sent/       # Email sent flow tests
│   ├── Import/           # Data import tests
│   ├── Lead/             # Lead management tests
│   ├── Login/            # Authentication tests
│   ├── Mail Draft/       # Draft email tests
│   ├── Practice/         # Experimental scripts
│   ├── Profile/          # Profile management tests
│   ├── SignOut/          # Logout tests
│
├── Playwright-docs.md    # Notes & documentation
└── package.json          # Project dependencies & scripts
```

The report contains:
- Test execution summary
- Passed and failed test cases
- Screenshots for failures
- Execution videos
- Trace logs

---

## 📸 Screenshot and Video Capture
- Screenshots are captured automatically on test failure
- Execution videos are stored for debugging
- Trace files allow step-by-step failure analysis

Storage Locations:
- Screenshots → screenshots folder
- Videos → videos folder
- Reports → playwright-report folder
- Logs → test-results folder

---

## 🧪 Modules Covered

### Login Module
- Valid login verification
- Invalid login validation
- UI authentication checks

### AI Agent Module
- AI workflow validations
- Response verification
- Feature testing

### Deal Module
- Deal creation
- Deal workflow validation

### Email Sent Module
- Email sending functionality
- Data validation checks

### Mail Draft Module
- Draft creation
- Save and edit workflow validation

### Import Module
- File import validation
- Data upload testing
- Error handling verification

### Profile Module
- Profile update validation
- UI and data verification

### Sign Out Module
- Logout functionality
- Session validation

---

## 🐞 Debugging Failures
If a test fails, use:

This helps analyze step-by-step execution along with screenshots and logs.

---

## 🔄 Continuous Integration
This framework supports CI/CD integration for automated test execution during code commits and pull requests.

---

## 📏 Best Practices Followed
- Modular test design
- Reusable utilities
- Clear folder structure
- Automated reporting
- Screenshot and video capture
- Trace-based debugging
- Scalable automation framework

---

## 🤝 Contribution Guidelines
1. Create a new branch  
2. Add or update test cases  
3. Execute tests locally  
4. Submit a Pull Request  

---

## 📌 Future Enhancements
- API automation integration
- Parallel test execution optimization
- Cross-browser test expansion
- Data-driven testing
- CI/CD pipeline enhancements

---

## 👨‍💻 Author
Ashish Rai
QA Engineer  


