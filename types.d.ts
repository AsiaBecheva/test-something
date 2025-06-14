declare module 'multiple-cucumber-html-reporter' {
  interface ReportOptions {
    jsonDir: string;
    reportPath: string;
    metadata?: {
      browser?: {
        name: string;
        version: string;
      };
      device?: string;
      platform?: {
        name: string;
        version: string;
      };
    };
    customData?: {
      title: string;
      data: Array<{
        label: string;
        value: string;
      }>;
    };
  }

  export function generate(options: ReportOptions): void;
}

declare module 'cucumber-json-report-formatter' {
  export class Formatter {
    parseCucumberJson(sourceFile: string, outputFile: string): Promise<void>;
  }
}