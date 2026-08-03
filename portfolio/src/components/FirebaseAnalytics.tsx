"use client";

import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import firebaseConfig from "@/lib/firebase";

/**
 * Initializes Firebase Analytics in the browser so visitor traffic to the
 * hosted portfolio is tracked. Renders nothing and is safe to include in the
 * root layout — it silently no-ops in unsupported/offline environments.
 */
export function FirebaseAnalytics() {
  useEffect(() => {
    async function init() {
      try {
        // isSupported() avoids throwing in environments where analytics
        // cannot run (e.g. local file://, some privacy blockers).
        if (typeof window === "undefined" || !(await isSupported())) return;
        const app = initializeApp(firebaseConfig);
        getAnalytics(app);
      } catch {
        // Analytics is a progressive enhancement — never break the site.
      }
    }

    init();
  }, []);

  return null;
}
