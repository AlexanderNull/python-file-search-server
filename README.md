# python-file-search-server
Allow users on your network to search files for specific metadata
Rushed together for now for a party later tonight

## Steps to run:
- You'll need to see what your environment's local IP is and update that in App.js
- navigate to web/explorer and run "npm run build"
- navigate to root and set an environment variable FLASK_APP=app.py
- run "python -m flask run --host=0.0.0.0" if you want this available on your wifi