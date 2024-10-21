import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClient provider

// Update appConfig to include HttpClient
const updatedAppConfig = {
  providers: [
    ...appConfig.providers, // Spread existing providers
    provideHttpClient()
  ],
};

bootstrapApplication(AppComponent, updatedAppConfig)
  .catch((err) => console.error(err));
