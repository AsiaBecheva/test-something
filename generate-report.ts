// @ts-ignore
import { Formatter } from 'cucumber-json-report-formatter';
// @ts-ignore
import { generate } from 'multiple-cucumber-html-reporter';
import * as fs from 'fs';
import * as path from 'path';

export async function formatReports() {
  const formatter = new Formatter();
  const sourceFile = './cucumber-messages.ndjson';
  const outputFile = './cypress/cucumber-json/cucumber-report.json';
  
  // Make sure output directory exists
  const dir = path.dirname(outputFile);
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
  
  await formatter.parseCucumberJson(sourceFile, outputFile);
}

export async function generateReports() {
  await formatReports();

  generate({
    jsonDir: 'cypress/cucumber-json',
    reportPath: 'cypress/cucumber-report',
    metadata: {
      browser: {
        name: 'chrome',
        version: 'latest'
      },
      device: 'Local test machine',
      platform: {
        name: 'Linux',
        version: 'latest'
      }
    },
    customData: {
      title: 'Run Info',
      data: [
        { label: 'Project', value: 'Core Regression Test' },
        { label: 'Release', value: '1.0.0' },
        { label: 'Test Date', value: new Date().toLocaleDateString() }
      ]
    }
  });
}

// Proper way to handle the Promise
generateReports().catch(error => {
  console.error('Error generating reports:', error);
  process.exit(1);
});