<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Shortener</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        input {
            padding: 10px;
            width: 300px;
        }
        button {
            padding: 10px;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <h1>URL Shortener</h1>
    <input type="text" id="longUrl" placeholder="Enter your long URL">
    <button id="submitBtn">Shorten URL</button>
    <p id="shortUrlDisplay"></p>

    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
        import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyDavsQantsw3GZKSTkrfd5rgnYsx3_6KBo",
            authDomain: "shorturl-5f0f7.firebaseapp.com",
            projectId: "shorturl-5f0f7",
            storageBucket: "shorturl-5f0f7.appspot.com",
            messagingSenderId: "1040835866476",
            appId: "1:1040835866476:web:67080ea69ce82818be0d49",
            measurementId: "G-9K2L01LJP5"
        };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        const submitBtn = document.getElementById('submitBtn');
        const longUrlInput = document.getElementById('longUrl');
        const shortUrlDisplay = document.getElementById('shortUrlDisplay');

        submitBtn.addEventListener('click', async () => {
            const longUrl = longUrlInput.value.trim();
            if (longUrl) {
                const shortUrlId = generateShortUrlId();
                await setDoc(doc(collection(db, 'urls'), shortUrlId), {
                    longUrl: longUrl
                });

                const shortUrl = `https://tubego.xyz/${shortUrlId}`; // Replace with your actual domain
                shortUrlDisplay.innerText = `Short URL: ${shortUrl}`;
            } else {
                alert("Please enter a valid URL.");
            }
        });

        function generateShortUrlId(length = 6) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }

        // Handle redirection for short URLs
        const path = window.location.pathname.split('/').pop();
        if (path) {
            const docRef = doc(db, 'urls', path);
            getDoc(docRef).then((doc) => {
                if (doc.exists()) {
                    window.location.href = doc.data().longUrl;
                } else {
                    console.error('No such document!');
                }
            }).catch((error) => {
                console.error('Error getting document:', error);
            });
        }
    </script>
</body>
</html>
