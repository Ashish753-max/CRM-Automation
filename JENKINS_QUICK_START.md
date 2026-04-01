# 🚀 Jenkins + Playwright Integration - Quick Start

## ✅ What Has Been Setup For You

Your project is now ready for Jenkins integration with 4 new files:

| File | Purpose |
|------|---------|
| **Jenkinsfile** | Pipeline configuration (automation) |
| **package.json** | Updated with test scripts |
| **JENKINS_SETUP.md** | Complete setup guide |
| **setup-jenkins.bat** (Windows) | Automated setup script |
| **setup-jenkins.sh** (Mac/Linux) | Automated setup script |

---

## 🎯 Quick Setup (5 Minutes)

### **For Windows Users:**

1. **Run the setup script** (in your project folder):
   ```bash
   setup-jenkins.bat
   ```

2. **Start Jenkins** (if not running):
   ```bash
   java -jar jenkins.war
   ```

3. **Create Pipeline Job:**
   - Go to `http://localhost:8080`
   - Click **"New Item"**
   - Name: `Playwright-CRM-Tests`
   - Select **"Pipeline"**
   - In **Pipeline** → **Definition** → select **"Pipeline script from SCM"**
   - **SCM**: Git
   - **Repository URL**: `https://github.com/YOUR_USERNAME/CRM.git`
   - **Script Path**: `Jenkinsfile`
   - Click **Save**

4. **Run Tests:**
   - Click **"Build Now"**
   - View live console output
   - See HTML report after completion

---

## 📊 Available Test Commands

Run these in terminal or Jenkins:

```bash
npm test                    # Run all tests
npm run test:chrome        # Chrome only
npm run test:firefox       # Firefox only
npm run test:webkit        # Safari only
npm run test:all           # All browsers
npm run test:ui            # Interactive UI mode
npm run test:debug         # Debug mode
npm run report             # View HTML report
```

---

## 🔄 Automated Testing on Git Push

Set up Jenkins to automatically run tests when you push code:

### **Step 1: Add GitHub Webhook**
1. Go to your GitHub repo → **Settings** → **Webhooks**
2. Click **"Add webhook"**
3. **Payload URL**: `http://YOUR_JENKINS_URL/github-webhook/`
4. **Content type**: `application/json`
5. Select **"Push events"**
6. Click **"Add webhook"**

### **Step 2: Enable Jenkins Trigger**
1. Jenkins → Your Job → **Configure**
2. **Build Triggers** → Check ✓ **"GitHub hook trigger for GITScm polling"**
3. Save

✅ **Now every git push automatically runs your tests!**

---

## 📈 Jenkins Dashboard Features

After each test run, you'll see:

- ✅ **Build Status** (Passed/Failed)
- 📊 **Test Results** (passed/failed count)
- 📸 **Screenshots** (from failed tests)
- 🎬 **Video Recordings** (test sessions)
- 📋 **HTML Report** (detailed test breakdown)
- 📝 **Console Output** (logs and errors)

---

## 🛠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| **"java not found"** | Install Java JDK 11+: https://www.oracle.com/java/technologies/downloads/ |
| **"npm not found"** | Install Node.js: https://nodejs.org/ |
| **Tests timeout** | Increase timeout in `playwright.config.js` |
| **Permission denied** | Run script as Administrator (Windows) |
| **No report showing** | Install "Publish HTML Reports" plugin in Jenkins |

---

## 📝 Environment Variables

Jenkins automatically sets:
- `NODE_ENV = 'ci'`
- `CI = 'true'`

This enables CI-specific settings in your Playwright config:
- Retries enabled (2 retries on CI)
- Single worker (no parallel)
- Video recording on failures
- Detailed tracing

---

## 🎓 Next Steps

1. ✅ **Run setup script** (setup-jenkins.bat or setup-jenkins.sh)
2. ✅ **Read JENKINS_SETUP.md** for detailed guide
3. ✅ **Create Jenkins pipeline job**
4. ✅ **Connect your Git repository**
5. ✅ **Click "Build Now"** and watch tests run
6. ✅ **View reports** in Jenkins dashboard

---

## 💡 Pro Tips

- 📌 Keep Jenkinsfile in version control (commit to Git)
- 🔐 Use Jenkins credentials for sensitive data
- 📧 Set up email notifications for test failures
- 🗂️ Archive reports for historical tracking
- 🎯 Add build status badge to your README

---

## 📚 Resources

- **Jenkins Documentation**: https://jenkins.io/doc/
- **Playwright CI Guide**: https://playwright.dev/docs/ci
- **Jenkins Pipeline Syntax**: https://jenkins.io/doc/book/pipeline/syntax/

---

**Questions?** Check JENKINS_SETUP.md for complete guide!
