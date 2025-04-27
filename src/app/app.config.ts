import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "relationshipmanager-dcd9b", appId: "1:217851361598:web:724469dfcf647072be146f", storageBucket: "relationshipmanager-dcd9b.firebasestorage.app", apiKey: "AIzaSyB_1BtdVljCLLXvDOov_p5vdZtF3XpuDQQ", authDomain: "relationshipmanager-dcd9b.firebaseapp.com", messagingSenderId: "217851361598", measurementId: "G-6CFJWGCD0S" })), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideFirebaseApp(() => initializeApp({ projectId: "relationshipmanager-dcd9b", appId: "1:217851361598:web:724469dfcf647072be146f", storageBucket: "relationshipmanager-dcd9b.firebasestorage.app", apiKey: "AIzaSyB_1BtdVljCLLXvDOov_p5vdZtF3XpuDQQ", authDomain: "relationshipmanager-dcd9b.firebaseapp.com", messagingSenderId: "217851361598", measurementId: "G-6CFJWGCD0S" })), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions())]
};
