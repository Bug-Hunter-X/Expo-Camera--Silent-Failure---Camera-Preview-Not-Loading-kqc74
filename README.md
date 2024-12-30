# Expo Camera Permission Issue

This repository demonstrates a common issue when using Expo's Camera API: the camera preview fails to load silently due to missing permission handling.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

**Problem:** The original code attempts to access the camera without first checking for and requesting necessary permissions. This results in the camera preview not appearing, with no clear error messages to guide debugging.

**Solution:** The corrected code explicitly checks for camera permissions.  If permission is not granted, it requests it; otherwise, it proceeds to initialize the camera. This ensures a smoother user experience and prevents silent failures.