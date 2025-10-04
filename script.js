document.addEventListener('DOMContentLoaded', () => {
    // --- 1. נתוני הכרטיסיות המלאים (עבור כל 25 הנושאים) ---
    const ALL_TOPICS_DATA = {
        "Simple Conversation": [
            { english: "My", hebrew: "שלי" },
            { english: "Name", hebrew: "שם" },
            { english: "Live", hebrew: "חי" },
            { english: "Years old", hebrew: "בן / בת כמה שנים" },
            { english: "How old", hebrew: "בן/בת כמה" },
            { english: "Best friend", hebrew: "חבר/חברה הכי טוב" },
            { english: "Favorite", hebrew: "מועדף" }
        ],
        "Professions": [
            { english: "Waiter", hebrew: "מלצר" },
            { english: "Singer", hebrew: "זמר" },
            { english: "Dentist", hebrew: "רופא שיניים" },
            { english: "Shopkeeper", hebrew: "מוכר" },
            { english: "Pilot", hebrew: "טייס" },
            { english: "Vet", hebrew: "וטרינר" },
            { english: "Nurse", hebrew: "אחות" },
            { english: "Policeman", hebrew: "שוטר" },
            { english: "Doctor", hebrew: "רופא" },
            { english: "Waitress", hebrew: "מלצרית" }
        ],
        "Seasons and Weather": [
            { english: "Fall", hebrew: "סתיו" },
            { english: "Cold", hebrew: "קר" },
            { english: "Warm", hebrew: "חמים" },
            { english: "Spring", hebrew: "אביב" },
            { english: "Summer", hebrew: "קיץ" },
            { english: "Winter", hebrew: "חורף" }
        ],
        "Family Members": [
            { english: "Uncle", hebrew: "דוד" },
            { english: "Cousin", hebrew: "בן דוד/בת דודה" },
            { english: "Grandmother", hebrew: "סבתא" },
            { english: "Me", hebrew: "אני/אותי" },
            { english: "Father", hebrew: "אבא" },
            { english: "Mother", hebrew: "אמא" },
            { english: "Brother", hebrew: "אח" },
            { english: "Grandfather", hebrew: "סבא" },
            { english: "Sister", hebrew: "אחות" }
        ],
        "Adjectives": [ // Part 1
            { english: "New", hebrew: "חדש" },
            { english: "Long", hebrew: "ארוך" },
            { english: "Big", hebrew: "גדול" },
            { english: "Small", hebrew: "קטן" },
            { english: "Beautiful", hebrew: "יפה" },
            { english: "Fast", hebrew: "מהר (מהיר)" },
            { english: "Slow", hebrew: "לאט (איטי)" }
        ],
        "Adjectives Part 2": [
            { english: "Young", hebrew: "צעיר" },
            { english: "Expensive", hebrew: "יקר" },
            { english: "Short", hebrew: "נמוך" },
            { english: "Tall", hebrew: "גבוה" },
            { english: "Weak", hebrew: "חלש" },
            { english: "Strong", hebrew: "חזק" },
            { english: "Sweet", hebrew: "מתוק" },
            { english: "Old", hebrew: "זקן" },
            { english: "Scary", hebrew: "מפחיד" }
        ],
        "School Supplies": [
            { english: "Glue", hebrew: "דבק" },
            { english: "Book", hebrew: "ספר" },
            { english: "Notebook", hebrew: "מחברת" },
            { english: "Eraser", hebrew: "מחק" },
            { english: "Pencil case", hebrew: "קלמר" },
            { english: "Pen", hebrew: "נו (עט)" },
            { english: "School Bag", hebrew: "ילקוט (תיק בית ספר)" },
            { english: "Pencil", hebrew: "עיפרון" },
            { english: "sharpener", hebrew: "מחדד" },
            { english: "Ruler", hebrew: "סרגל" },
            { english: "Scissors", hebrew: "מספריים" }
        ],
        "Days and Months": [
            { english: "January", hebrew: "ינואר" },
            { english: "Sunday", hebrew: "ראשון" },
            { english: "Tuesday", hebrew: "שלישי" },
            { english: "Friday", hebrew: "שישי" },
            { english: "Monday", hebrew: "שני" },
            { english: "Saturday", hebrew: "שבת" },
            { english: "Wednesday", hebrew: "רביעי" },
            { english: "Thursday", hebrew: "חמישי" },
            { english: "December", hebrew: "דצמבר" }
        ],
        "Food": [
            { english: "Banana", hebrew: "בננה" },
            { english: "Steak", hebrew: "סטייק" },
            { english: "Egg", hebrew: "ביצה" },
            { english: "Chips", hebrew: "צ'יפס" },
            { english: "Sausage", hebrew: "נקניקייה" },
            { english: "Chicken", hebrew: "עוף" },
            { english: "Sandwich", hebrew: "כריך" },
            { english: "Pizza", hebrew: "פיצה" },
            { english: "Chocolate", hebrew: "שוקולד" }
        ],
        "Vegetables": [
            { english: "Cucumber", hebrew: "מלפפון" },
            { english: "Tomato", hebrew: "עגבנייה" },
            { english: "Onion", hebrew: "בצל" },
            { english: "Potato", hebrew: "תפוח אדמה" },
            { english: "Carrot", hebrew: "גזר" },
            { english: "Salad", hebrew: "סלט" },
            { english: "Garlic", hebrew: "שום" },
            { english: "Corn", hebrew: "תירס" }
        ],
        "Drinks": [
            { english: "Coffee", hebrew: "קפה" },
            { english: "Tea", hebrew: "תה" },
            { english: "Milk", hebrew: "חלב" },
            { english: "Juice", hebrew: "מיץ" },
            { english: "Water", hebrew: "מים" },
            { english: "Wine", hebrew: "יין" },
            { english: "Beer", hebrew: "בירה" },
            { english: "Lemonade", hebrew: "לימונדה" },
            { english: "Soda", hebrew: "סודה" }
        ],
        "At the Zoo": [
            { english: "Tiger", hebrew: "טיגריס" },
            { english: "Giraffe", hebrew: "ג'ירפה" },
            { english: "Bear", hebrew: "דוב" },
            { english: "Monkey", hebrew: "קוף" },
            { english: "Lion", hebrew: "אריה" },
            { english: "Zebra", hebrew: "זברה" },
            { english: "Elephant", hebrew: "פיל" },
            { english: "Snake", hebrew: "נחש" }
        ],
        "Birds and Insects": [
            { english: "Bird", hebrew: "ציפור" },
            { english: "Butterfly", hebrew: "פרפר" },
            { english: "Bee", hebrew: "דבורה" },
            { english: "Mosquito", hebrew: "יתוש" },
            { english: "Ant", hebrew: "נמלה" },
            { english: "Fly", hebrew: "זבוב" },
            { english: "Spider", hebrew: "עכביש" },
            { english: "Grasshopper", hebrew: "חגב" }
        ],
        "Shapes": [
            { english: "Triangle", hebrew: "משולש" },
            { english: "Circle", hebrew: "עיגול" },
            { english: "Square", hebrew: "ריבוע" },
            { english: "Rectangle", hebrew: "מלבן" },
            { english: "Oval", hebrew: "אליפסה" },
            { english: "Star", hebrew: "כוכב" },
            { english: "Heart", hebrew: "לב" }
        ],
        "Colors": [
            { english: "Orange", hebrew: "כתום" },
            { english: "Pink", hebrew: "ורוד" },
            { english: "Yellow", hebrew: "צהוב" },
            { english: "Red", hebrew: "אדום" },
            { english: "Green", hebrew: "ירוק" },
            { english: "Blue", hebrew: "כחול" },
            { english: "Black", hebrew: "שחור" },
            { english: "White", hebrew: "לבן" },
            { english: "Brown", hebrew: "חום" }
        ],
        "Transportation": [
            { english: "Bus", hebrew: "אוטובוס" },
            { english: "Car", hebrew: "מכונית" },
            { english: "Train", hebrew: "רכבת" },
            { english: "Ship", hebrew: "אונייה" },
            { english: "Bicycle", hebrew: "אופניים" },
            { english: "Truck", hebrew: "משאית" },
            { english: "Scooter", hebrew: "קורקינט" },
            { english: "Airplane", hebrew: "מטוס" },
            { english: "Motorcycle", hebrew: "אופנוע" }
        ],
        "My Home": [
            { english: "Chair", hebrew: "כיסא" },
            { english: "Lamp", hebrew: "מנורה" },
            { english: "Table", hebrew: "שולחן" },
            { english: "Picture", hebrew: "תמונה" },
            { english: "Bed", hebrew: "מיטה" },
            { english: "Window", hebrew: "חלון" },
            { english: "Closet", hebrew: "ארון (בגדים)" },
            { english: "Wall", hebrew: "קיר" },
            { english: "Carpet", hebrew: "שטיח" }
        ],
        "Actions": [
            { english: "Speak", hebrew: "מדבר" },
            { english: "Play", hebrew: "משחק" },
            { english: "Run", hebrew: "רץ" },
            { english: "Drive", hebrew: "נוהג" },
            { english: "Sit", hebrew: "יושב" },
            { english: "Walk", hebrew: "הולך" },
            { english: "Dance", hebrew: "רוקד" },
            { english: "Jump", hebrew: "קופץ" }
        ],
        "Opposites": [
            { english: "Up/Down", hebrew: "למעלה/למטה" },
            { english: "Dirty/Clean", hebrew: "מלוכלך/נקי" },
            { english: "Yes/No", hebrew: "כן/לא" },
            { english: "Hot/Cold", hebrew: "חם/קר" },
            { english: "On/Off", hebrew: "דלוק/כבה" },
            { english: "Day/Night", hebrew: "יום/לילה" }
        ],
        "Prepositions": [
            { english: "In", hebrew: "בתוך/ב-" },
            { english: "On", hebrew: "על" },
            { english: "Under", hebrew: "מתחת" },
            { english: "Near", hebrew: "ליד/קרוב" },
            { english: "Far", hebrew: "רחוק" },
            { english: "Next to", hebrew: "צמוד ל-" },
            { english: "In front of", hebrew: "מול/מלפנים" },
            { english: "Behind", hebrew: "מאחור" }
        ],
        "Numbers": [
            { english: "One", hebrew: "אחד" },
            { english: "Two", hebrew: "שתיים" },
            { english: "Three", hebrew: "שלוש" },
            { english: "Four", hebrew: "ארבע" },
            { english: "Five", hebrew: "חמש" },
            { english: "Six", hebrew: "שש" },
            { english: "Seven", hebrew: "שבע" },
            { english: "Eight", hebrew: "שמונה" },
            { english: "Nine", hebrew: "תשע" },
            { english: "Ten", hebrew: "עשר" }
        ],
        "Tidbits": [
            { english: "Who", hebrew: "מי" },
            { english: "Where", hebrew: "איפה" },
            { english: "What", hebrew: "מה" },
            { english: "Why", hebrew: "למה" },
            { english: "How", hebrew: "איך" },
            { english: "Please", hebrew: "בבקשה" },
            { english: "Thank you", hebrew: "תודה" },
            { english: "Sorry", hebrew: "סליחה" },
            { english: "Yes", hebrew: "כן" },
            { english: "No", hebrew: "לא" }
        ],
        "Body Parts": [
            { english: "Hair", hebrew: "שיער" },
            { english: "Eye", hebrew: "עין" },
            { english: "Hand", hebrew: "יד" },
            { english: "Foot", hebrew: "רגל (כף רגל)" },
            { english: "Mouth", hebrew: "פה" },
            { english: "Nose", hebrew: "אף" },
            { english: "Ear", hebrew: "אוזן" },
            { english: "Finger", hebrew: "אצבע" },
            { english: "Head", hebrew: "ראש" }
        ],
        "Bathroom": [
            { english: "Mirror", hebrew: "מראה" },
            { english: "Toothbrush", hebrew: "מברשת שיניים" },
            { english: "Soap", hebrew: "סבון" },
            { english: "Shampoo", hebrew: "שמפו" },
            { english: "Towel", hebrew: "מגבת" },
            { english: "Toilet", hebrew: "אסלה" },
            { english: "Bath", hebrew: "אמבטיה" },
            { english: "Comb", hebrew: "מסרק" },
            { english: "Toothpaste", hebrew: "משחת שיניים" }
        ],
        "Clothing": [
            { english: "Shirt", hebrew: "חולצה" },
            { english: "Dress", hebrew: "שמלה" },
            { english: "Pants", hebrew: "מכנסיים" },
            { english: "Shoes", hebrew: "נעליים" },
            { english: "Hat", hebrew: "כובע" },
            { english: "Skirt", hebrew: "חצאית" },
            { english: "Socks", hebrew: "גרביים" },
            { english: "Sweater", hebrew: "סוודר" },
            { english: "Shorts", hebrew: "מכנסיים קצרים" }
        ]
    };
    
    // --- פונקציות עזר כלליות ---
    /** מערבב מערך */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // --- 2. סלקטורים ומשתני מצב ---
    const topicSelectionArea = document.getElementById('topic-selection-area');
    const flashcardArea = document.getElementById('flashcard-area');
    const quizArea = document.getElementById('quiz-area');
    const flashcard = document.getElementById('flashcard');
    const englishWordDisplay = document.getElementById('english-word');
    const hebrewTranslationDisplay = document.getElementById('hebrew-translation');
    const hebrewHintDisplay = document.getElementById('hebrew-hint-display');
    const nextCardBtn = document.getElementById('next-card-btn');
    const cardCounter = document.getElementById('card-counter');
    const topicTitle = document.getElementById('topic-title');
    const backToTopicsBtn = document.getElementById('back-to-topics-btn');
    const backToTopicsBtnQuiz = document.getElementById('back-to-topics-btn-quiz');
    
    // סלקטורי מצב משחק
    const flashcardModeBtn = document.getElementById('flashcard-mode-btn');
    const quizModeBtn = document.getElementById('quiz-mode-btn');
    let currentMode = 'flashcards';

    // סלקטורי מבחן
    const quizTopicTitle = document.getElementById('quiz-topic-title');
    const scoreDisplay = document.getElementById('score-display');
    const quizQuestionHebrew = document.getElementById('quiz-question-hebrew');
    const answerOptionsGrid = document.getElementById('answer-options-grid');
    const quizFeedback = document.getElementById('quiz-feedback');
    const nextQuizBtn = document.getElementById('next-quiz-btn');
    const quizSummary = document.getElementById('quiz-summary');
    const finalScoreText = document.getElementById('final-score-text');
    const startQuizAgainBtn = document.getElementById('start-quiz-again-btn');

    // משתני מצב כלליים
    let currentTopicName = null;
    let currentCardDeck = [];
    
    // משתני מצב כרטיסיות
    let currentCardIndex = 0;
    let isFlipped = false;
    
    // משתני מצב משחק
    let quizDeck = [];
    let currentQuizIndex = 0;
    let correctAnswersCount = 0;

    // --- 3. לוגיקת מצבי תצוגה ---
    
    /** מעביר את התצוגה למצב הנבחר */
    function switchMode(mode) {
        currentMode = mode;
        flashcardModeBtn.classList.toggle('active', mode === 'flashcards');
        quizModeBtn.classList.toggle('active', mode === 'quiz');
        
        // טוען את כפתורי הנושאים מחדש
        createTopicButtons(); 
    }

    /** יוצר כפתורים לבחירת נושא במסך הראשי */
    function createTopicButtons() {
        const grid = document.getElementById('topic-buttons-grid');
        grid.innerHTML = ''; // מנקה כפתורים ישנים
        
        Object.keys(ALL_TOPICS_DATA).forEach(topicName => {
            const btn = document.createElement('button');
            btn.classList.add('topic-btn');
            
            const wordCount = ALL_TOPICS_DATA[topicName].length;
            
            // התאמה ויזואלית לפי מצב
            const modeText = currentMode === 'quiz' ? ' (מבחן)' : ' (תרגול)';
            btn.innerHTML = `${topicName} <span class="word-count">(${wordCount} מילים${modeText})</span>`;
            
            btn.addEventListener('click', () => {
                // קובע לאן לעבור בהתאם למצב הנוכחי
                if (currentMode === 'quiz') {
                    startQuiz(topicName);
                } else {
                    startFlashcards(topicName);
                }
            });
            grid.appendChild(btn);
        });
        
        // מוודא שאזורי המבחן והכרטיסיות מוסתרים בבחירת נושא
        flashcardArea.style.display = 'none';
        quizArea.style.display = 'none';
        topicSelectionArea.style.display = 'block';
    }

    // --- 4. לוגיקת כרטיסיות (Flashcards) ---

    function startFlashcards(topicName) {
        currentTopicName = topicName;
        currentCardDeck = ALL_TOPICS_DATA[topicName];
        currentCardIndex = 0;
        
        topicTitle.textContent = currentTopicName;
        
        topicSelectionArea.style.display = 'none';
        flashcardArea.style.display = 'block';
        quizArea.style.display = 'none';
        
        loadCard();
    }
    
    function loadCard() {
        if (currentCardIndex >= currentCardDeck.length) {
            englishWordDisplay.textContent = `סיימת את נושא "${currentTopicName}"!`;
            hebrewTranslationDisplay.textContent = 'לחץ על "התחל נושא מחדש" כדי לחזור להתחלה.';
            hebrewHintDisplay.textContent = ''; 
            nextCardBtn.textContent = '🔄 התחל נושא מחדש';
            cardCounter.textContent = `סיימת ${currentCardDeck.length} כרטיסיות!`;
            flashcard.classList.remove('is-flipped'); 
            isFlipped = false;
            return;
        }

        const card = currentCardDeck[currentCardIndex];
        
        englishWordDisplay.textContent = card.english;
        hebrewTranslationDisplay.textContent = card.hebrew;
        
        // הצגת הרמז העברי
        const primaryHebrew = card.hebrew.split('/')[0].split('(')[0].trim();
        hebrewHintDisplay.textContent = `תרגום: ${primaryHebrew}`;
        
        cardCounter.textContent = `כרטיסייה ${currentCardIndex + 1} מתוך ${currentCardDeck.length}`;

        flashcard.classList.remove('is-flipped');
        hebrewHintDisplay.style.visibility = 'visible';
        isFlipped = false;
        nextCardBtn.textContent = '⬇️ כרטיסייה הבאה';
    }

    function flipCard() {
        if (currentCardIndex >= currentCardDeck.length) return; 
        flashcard.classList.toggle('is-flipped');
        isFlipped = !isFlipped;
        hebrewHintDisplay.style.visibility = isFlipped ? 'hidden' : 'visible';
    }

    function nextCard() {
        if (currentCardIndex >= currentCardDeck.length) {
            currentCardIndex = 0;
        } else {
            currentCardIndex++;
        }
        loadCard();
    }
    
    function backToTopics() {
        flashcardArea.style.display = 'none';
        quizArea.style.display = 'none';
        topicSelectionArea.style.display = 'block';
        hebrewHintDisplay.textContent = '';
        currentTopicName = null;
        createTopicButtons(); // מוודא שהכפתורים נטענים שוב
    }
    
    // --- 5. לוגיקת מבחן (Quiz) ---
    
    function startQuiz(topicName) {
        currentTopicName = topicName;
        currentCardDeck = ALL_TOPICS_DATA[topicName];
        
        // יצירת חפיסת מבחן מעורבבת
        quizDeck = [...currentCardDeck];
        shuffleArray(quizDeck);
        
        currentQuizIndex = 0;
        correctAnswersCount = 0;
        
        quizTopicTitle.textContent = currentTopicName;
        topicSelectionArea.style.display = 'none';
        flashcardArea.style.display = 'none';
        quizArea.style.display = 'block';
        quizSummary.style.display = 'none';

        loadQuizQuestion();
    }
    
    function loadQuizQuestion() {
        // מנקה תוצאות קודמות
        answerOptionsGrid.innerHTML = '';
        quizFeedback.textContent = '';
        nextQuizBtn.style.display = 'none';

        // בדיקת סיום
        if (currentQuizIndex >= quizDeck.length) {
            showQuizSummary();
            return;
        }
        
        const currentWord = quizDeck[currentQuizIndex];
        const correctEnglish = currentWord.english;
        // לוקחים את הפירוש העברי הראשי לשאלה
        const quizHebrew = currentWord.hebrew.split('/')[0].split('(')[0].trim(); 
        
        quizQuestionHebrew.textContent = quizHebrew;
        updateScoreDisplay();

        // 1. קביעת מסיחים (Distractors)
        // אוספים את כל המילים באנגלית מכל הנושאים
        const allEnglishWords = Object.values(ALL_TOPICS_DATA)
            .flat()
            .map(item => item.english)
            .filter(word => word !== correctEnglish); // מוודאים שהתשובה הנכונה לא נכללת

        // בחירת 3 מסיחים אקראיים ייחודיים
        shuffleArray(allEnglishWords);
        const distractors = allEnglishWords.slice(0, 3);
        
        // 2. יצירת אפשרויות התשובה
        const options = [...distractors, correctEnglish];
        shuffleArray(options); // ערבוב המיקום של התשובה הנכונה

        // 3. הצגת הכפתורים
        options.forEach(option => {
            const btn = document.createElement('button');
            btn.classList.add('answer-btn');
            btn.textContent = option;
            btn.dataset.answer = option;
            btn.addEventListener('click', () => checkAnswer(btn, option === correctEnglish));
            answerOptionsGrid.appendChild(btn);
        });
    }

    function checkAnswer(selectedButton, isCorrect) {
        // מונע הקלקה נוספת לאחר בחירה
        document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);

        if (isCorrect) {
            selectedButton.classList.add('correct');
            quizFeedback.textContent = '✅ נכון מאוד!';
            correctAnswersCount++;
        } else {
            selectedButton.classList.add('incorrect');
            quizFeedback.textContent = '❌ לא נכון. התשובה הנכונה היא: ' + quizDeck[currentQuizIndex].english;
            
            // מדגיש את התשובה הנכונה
            document.querySelectorAll('.answer-btn').forEach(btn => {
                if (btn.dataset.answer === quizDeck[currentQuizIndex].english) {
                    btn.classList.add('correct');
                }
            });
        }
        
        nextQuizBtn.style.display = 'block';
        updateScoreDisplay();
    }
    
    function nextQuizQuestion() {
        currentQuizIndex++;
        loadQuizQuestion();
    }

    function updateScoreDisplay() {
        scoreDisplay.textContent = `ניקוד: ${correctAnswersCount} / ${currentQuizIndex + 1}`;
    }

    function showQuizSummary() {
        const totalQuestions = quizDeck.length;
        const percentage = Math.round((correctAnswersCount / totalQuestions) * 100);

        quizQuestionHebrew.textContent = ''; // מנקה את השאלה
        answerOptionsGrid.innerHTML = ''; // מנקה כפתורים
        quizFeedback.textContent = '';
        nextQuizBtn.style.display = 'none';

        finalScoreText.innerHTML = `ענית נכון על **${correctAnswersCount}** שאלות מתוך **${totalQuestions}**!<br> (ציון: **${percentage}%**)`;
        
        quizSummary.style.display = 'block';
    }

    // --- 6. אירועים ואתחול ---

    // כרטיסיות
    flashcard.addEventListener('click', flipCard);
    nextCardBtn.addEventListener('click', nextCard);
    backToTopicsBtn.addEventListener('click', backToTopics);
    
    // מבחן
    nextQuizBtn.addEventListener('click', nextQuizQuestion);
    startQuizAgainBtn.addEventListener('click', () => startQuiz(currentTopicName));
    backToTopicsBtnQuiz.addEventListener('click', backToTopics);
    
    // בורר מצבים
    flashcardModeBtn.addEventListener('click', () => switchMode('flashcards'));
    quizModeBtn.addEventListener('click', () => switchMode('quiz'));

    // אתחול
    switchMode('flashcards'); // מתחיל במצב כרטיסיות כברירת מחדל
});