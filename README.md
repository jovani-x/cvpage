# cvpage

Quick way to create simple CV and save it as PDF-file.

![cvpage](https://github.com/jovani-x/cvpage/blob/media/cvpage.webp?raw=true)

## Run

1. Clone the repo:

   ```
    git clone https://github.com/jovani-x/cvpage.git
   ```

2. Install dependencies:

   ```
    npm i
   ```

3. Rename _.env.example_ to _.env_

4. Replace content with actual data in _fake-store.example.json_  
   (you can create a new file for your data and set it to _VITE_NODE_PERSON_DATA_URL_ in _.env-file_)

5. Open preview:

   ```
    npm run dev
   ```

   then go to [a preview page](http://localhost:5173/)

6. Check what you get:

   Press `ctrl+p` (chrome) OR click _Print_ menu item.

7. Save to PDF-file:

   Choose destination _Save as PDF_ and Save.

## Customization

It's just a SPA with _react_ and _tailwind_.  
Feel free to change any styles and components.
