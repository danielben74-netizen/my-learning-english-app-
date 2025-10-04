document.addEventListener('DOMContentLoaded', () => {
    // רשימת צבעים ידידותיים ל-25 הנושאים
    const TOPIC_COLORS = [
        '#007bff', '#28a745', '#ffc107', '#dc3545', '#20c997', 
        '#6610f2', '#e83e8c', '#fd7e14', '#6f42c1', '#800000', 
        '#000080', '#808000', '#DC143C', '#008B8B', '#6A5ACD', 
        '#228B22', '#FFD700', '#87CEEB', '#FF7F50', '#DA70D6', 
        '#D2691E', '#3CB371', '#4169E1', '#8B008B', '#FF8C00'
    ];

    // --- נתוני הכרטיסיות המלאים (נתוני דמה כדי להבטיח שהאפליקציה עובדת) ---
    // אנא החלף את הערכים הללו במילים האמיתיות שלך
    const ALL_TOPICS_DATA = { 
        "Simple Conversation": [ 
            { english: "Hello", hebrew: "שלום" },
            { english: "Goodbye", hebrew: "להתראות" },
            { english: "Please", hebrew: "בבקשה" },
            { english: "Thank You", hebrew: "תודה" },
            { english: "Excuse Me", hebrew: "סליחה" }
        ],
        "Professions": [ 
            { english: "Doctor", hebrew: "רופא/ה" },
            { english: "Teacher", hebrew: "מורה" },
            { english: "Engineer", hebrew: "מהנדס/ת" },
            { english: "Chef", hebrew: "שף / טבח" },
            { english: "Pilot", hebrew: "טייס/ת" }
        ],
        "Seasons and Weather": [ 
            { english: "Summer", hebrew: "קיץ" },
            { english: "Winter", hebrew: "חורף" },
            { english: "Rain", hebrew: "גשם" },
            { english: "Sunny", hebrew: "שמשי" },
            { english: "Cloudy", hebrew: "מעונן" }
        ],
        "Family Members": [ 
            { english: "Mother", hebrew: "אמא" },
            { english: "Father", hebrew: "אבא" },
            { english: "Sister", hebrew: "אחות" },
            { english: "Brother", hebrew: "אח" },
            { english: "Grandparent", hebrew: "סבא / סבתא" }
        ],
        "Adjectives": [ 
            { english: "Happy", hebrew: "שמח" },
            { english: "Sad", hebrew: "עצוב" },
            { english: "Big", hebrew: "גדול" },
            { english: "Small", hebrew: "קטן" },
            { english: "Fast", hebrew: "מהיר" }
        ],
        "Adjectives Part 2": [ 
            { english: "Tired", hebrew: "עייף" },
            { english: "Excited", hebrew: "נרגש" },
            { english: "Angry", hebrew: "כועס" },
            { english: "Calm", hebrew: "רגוע" },
            { english: "Busy", hebrew: "עסוק" }
        ],
        "School Supplies": [ 
            { english: "Pencil", hebrew: "עיפרון" },
            { english: "Eraser", hebrew: "מחק" },
            { english: "Book", hebrew: "ספר" },
            { english: "Backpack", hebrew: "ילקוט" },
            { english: "Scissors", hebrew: "מספריים" }
        ],
        "Days and Months": [ 
            { english: "Monday", hebrew: "יום שני" },
            { english: "Sunday", hebrew: "יום ראשון" },
            { english: "January", hebrew: "ינואר" },
            { english: "December", hebrew: "דצמבר" },
            { english: "Yesterday", hebrew: "אתמול" }
        ],
        "Food": [ 
            { english: "Pizza", hebrew: "פיצה" },
            { english: "Bread", hebrew: "לחם" },
            { english: "Cheese", hebrew: "גבינה" },
            { english: "Soup", hebrew: "מרק" },
            { english: "Cake", hebrew: "עוגה" }
        ],
        "Vegetables": [ 
            { english: "Tomato", hebrew: "עגבנייה" },
            { english: "Carrot", hebrew: "גזר" },
            { english: "Potato", hebrew: "תפוח אדמה" },
            { english: "Cucumber", hebrew: "מלפפון" },
            { english: "Onion", hebrew: "בצל" }
        ],
        "Drinks": [ 
            { english: "Water", hebrew: "מים" },
            { english: "Juice", hebrew: "מיץ" },
            { english: "Coffee", hebrew: "קפה" },
            { english: "Tea", hebrew: "תה" },
            { english: "Milk", hebrew: "חלב" }
        ],
        "At the Zoo": [ 
            { english: "Lion", hebrew: "אריה" },
            { english: "Elephant", hebrew: "פיל" },
            { english: "Monkey", hebrew: "קוף" },
            { english: "Tiger", hebrew: "נמר" },
            { english: "Bear", hebrew: "דוב" }
        ],
        "Birds and Insects": [ 
            { english: "Bird", hebrew: "ציפור" },
            { english: "Bee", hebrew: "דבורה" },
            { english: "Butterfly", hebrew: "פרפר" },
            { english: "Ant", hebrew: "נמלה" },
            { english: "Fly", hebrew: "זבוב" }
        ],
        "Shapes": [ 
            { english: "Circle", hebrew: "עיגול" },
            { english: "Square", hebrew: "ריבוע" },
            { english: "Triangle", hebrew: "משולש" },
            { english: "Star", hebrew: "כוכב" },
            { english: "Heart", hebrew: "לב" }
        ],
        "Colors": [ 
            { english: "Red", hebrew: "אדום" },
            { english: "Blue", hebrew: "כחול" },
            { english: "Yellow", hebrew: "צהוב" },
            { english: "Green", hebrew: "ירוק" },
            { english: "Purple", hebrew: "סגול" }
        ],
        "Transportation": [ 
            { english: "Car", hebrew: "מכונית" },
            { english: "Bus", hebrew: "אוטובוס" },
            { english: "Train", hebrew: "רכבת" },
            { english: "Bicycle", hebrew: "אופניים" },
            { english: "Plane", hebrew: "מטוס" }
        ],
        "My Home": [ 
            { english: "Kitchen", hebrew: "מטבח" },
            { english: "Bedroom", hebrew: "חדר שינה" },
            { english: "Sofa", hebrew: "ספה" },
            { english: "Table", hebrew: "שולחן" },
            { english: "Window", hebrew: "חלון" }
        ],
        "Actions": [ 
            { english: "Run", hebrew: "לרוץ" },
            { english: "Jump", hebrew: "לקפוץ" },
            { english: "Eat", hebrew: "לאכול" },
            { english: "Sleep", hebrew: "לישון" },
            { english: "Read", hebrew: "לקרוא" }
        ],
        "Opposites": [ 
            { english: "Hot / Cold", hebrew: "חם / קר" },
            { english: "Up / Down", hebrew: "למעלה / למטה" },
            { english: "In / Out", hebrew: "בפנים / בחוץ" },
            { english: "Day / Night", hebrew: "יום / לילה" },
            { english: "Full / Empty", hebrew: "מלא / ריק" }
        ],
        "Prepositions": [ 
            { english: "On", hebrew: "על" },
            { english: "Under", hebrew: "מתחת" },
            { english: "Beside", hebrew: "ליד" },
            { english: "Behind", hebrew: "מאחורי" },
            { english: "Between", hebrew: "בין" }
        ],
        "Numbers": [ 
            { english: "One", hebrew: "אחד" },
            { english: "Ten", hebrew: "עשר" },
            { english: "Hundred", hebrew: "מאה" },
            { english: "Thousand", hebrew: "אלף" },
            { english: "Zero", hebrew: "אפס" }
        ],
        "Tidbits": [ 
            { english: "Key", hebrew: "מפתח" },
            { english: "Time", hebrew: "זמן" },
            { english: "Idea", hebrew: "רעיון" },
            { english: "Question", hebrew: "שאלה" },
            { english: "Answer", hebrew: "תשובה" }
        ],
        "Body Parts": [ 
            { english: "Head", hebrew: "ראש" },
            { english: "Hand", hebrew: "יד" },
            { english: "Foot", hebrew: "רגל" },
            { english: "Eye", hebrew: "עין" },
            { english: "Mouth", hebrew: "פה" }
        ],
        "Bathroom": [ 
            { english: "Soap", hebrew: "סבון" },
            { english: "Towel", hebrew: "מגבת" },
            { english: "Brush", hebrew: "מברשת שיניים" },
            { english: "Mirror", hebrew: "מראה" },
            { english: "Toilet", hebrew: "אסלה / שירותים" }
        ],
        "Clothing": [ 
            { english: "Shirt", hebrew: "חולצה" },
            { english: "Pants", hebrew: "מכנסיים" },
            { english: "Dress", hebrew: "שמלה" },
            { english: "Shoes", hebrew: "נעליים" },
            { english: "Hat", hebrew: "כובע" }
        ]
    };
    
    // --- פונקציות עזר כלליות ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // --- סלקטורים ומשתני מצב ---
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
    const flashcardModeBtn = document.getElementById('flashcard-mode-btn');
    const quizModeBtn = document.getElementById('quiz-mode-btn');
    let currentMode = 'flashcards';
    const quizTopicTitle = document.getElementById('quiz-topic-title');
    const scoreDisplay = document.getElementById('score-display');
    const quizQuestionHebrew = document.getElementById('quiz-question-hebrew');
    const answerOptionsGrid = document.getElementById('answer-options-grid');
    const quizFeedback = document.getElementById('quiz-feedback');
    const nextQuizBtn = document.getElementById('next-quiz-btn');
    const quizSummary = document.getElementById('quiz-summary');
    const finalScoreText = document.getElementById('final-score-text');
    const startQuizAgainBtn = document.getElementById('start-quiz-again-btn');
    let currentTopicName = null;
    let currentCardDeck = [];
    let currentCardIndex = 0;
    let isFlipped = false;
    let quizDeck = [];
    let currentQuizIndex = 0;
    let correctAnswersCount = 0;

    // --- לוגיקת מצבי תצוגה ---
    
    function switchMode(mode) {
        currentMode = mode;
        flashcardModeBtn.classList.toggle('active', mode === 'flashcards');
        quizModeBtn.classList.toggle('active', mode === 'quiz');
        createTopicButtons(); 
    }

    /** יוצר כפתורים לבחירת נושא במסך הראשי */
    function createTopicButtons() {
        const grid = document.getElementById('topic-buttons-grid');
        grid.innerHTML = ''; 
        
        Object.keys(ALL_TOPICS_DATA).forEach((topicName, index) => {
            const btn = document.createElement('button');
            btn.classList.add('topic-btn');
            
            // הוספת צבע ייחודי
            const color = TOPIC_COLORS[index % TOPIC_COLORS.length];
            btn.style.backgroundColor = color;
            btn.style.color = 'white'; 

            const wordCount = ALL_TOPICS_DATA[topicName].length;
            
            const modeText = currentMode === 'quiz' ? ' (מבחן)' : ' (תרגול)';
            btn.innerHTML = `${topicName} <span class="word-count">(${wordCount} מילים${modeText})</span>`;
            
            btn.addEventListener('click', () => {
                if (currentMode === 'quiz') {
                    startQuiz(topicName);
                } else {
                    startFlashcards(topicName);
                }
            });
            grid.appendChild(btn);
        });
        
        flashcardArea.style.display = 'none';
        quizArea.style.display = 'none';
        topicSelectionArea.style.display = 'block';
    }

    // --- לוגיקת כרטיסיות (Flashcards) ---

    function startFlashcards(topicName) {
        currentTopicName = topicName;
        // טעינת הנתונים מהמבנה המלא
        currentCardDeck = ALL_TOPICS_DATA[topicName];
        currentCardIndex = 0;
        
        // ערבוב הכרטיסיות להתחלה חדשה
        shuffleArray(currentCardDeck);
        
        topicTitle.textContent = currentTopicName;
        
        topicSelectionArea.style.display = 'none';
        flashcardArea.style.display = 'block';
        quizArea.style.display = 'none';
        
        loadCard();
    }
    
    function loadCard() {
        if (currentCardIndex >= currentCardDeck.length) {
            // הודעת סיום (כפי שהופיעה בצילום המסך)
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
        
        // הסרת הרמז העברי מעל הכרטיסייה (כפי שביקשת)
        hebrewHintDisplay.textContent = ''; 
        
        cardCounter.textContent = `כרטיסייה ${currentCardIndex + 1} מתוך ${currentCardDeck.length}`;

        flashcard.classList.remove('is-flipped');
        isFlipped = false;
        nextCardBtn.textContent = '⬇️ כרטיסייה הבאה';
    }

    function flipCard() {
        if (currentCardIndex >= currentCardDeck.length) return; 
        flashcard.classList.toggle('is-flipped');
        isFlipped = !isFlipped;
    }

    function nextCard() {
        if (currentCardIndex >= currentCardDeck.length) {
            // אם סיימו, מאפסים ומתחילים שוב (כולל ערבוב חדש)
            startFlashcards(currentTopicName);
        } else {
            currentCardIndex++;
            loadCard();
        }
    }
    
    function backToTopics() {
        flashcardArea.style.display = 'none';
        quizArea.style.display = 'none';
        topicSelectionArea.style.display = 'block';
        hebrewHintDisplay.textContent = '';
        currentTopicName = null;
        createTopicButtons(); 
    }
    
    // --- לוגיקת מבחן (Quiz) ---
    
    function startQuiz(topicName) {
        currentTopicName = topicName;
        currentCardDeck = ALL_TOPICS_DATA[topicName];
        
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
        answerOptionsGrid.innerHTML = '';
        quizFeedback.textContent = '';
        nextQuizBtn.style.display = 'none';

        if (currentQuizIndex >= quizDeck.length) {
            showQuizSummary();
            return;
        }
        
        const currentWord = quizDeck[currentQuizIndex];
        const correctEnglish = currentWord.english;
        // לוקחים רק את החלק העברי הראשון ללא סוגריים ולוכסנים
        const quizHebrew = currentWord.hebrew.split('/')[0].split('(')[0].trim(); 
        
        quizQuestionHebrew.textContent = quizHebrew;
        updateScoreDisplay();

        // יצירת מסיחים (Distractors) - תשובות שגויות מתוך כל המילים הקיימות
        const allEnglishWords = Object.values(ALL_TOPICS_DATA)
            .flat()
            .map(item => item.english)
            .filter(word => word !== correctEnglish);

        shuffleArray(allEnglishWords);
        const distractors = allEnglishWords.slice(0, 3);
        
        const options = [...distractors, correctEnglish];
        shuffleArray(options);

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
        document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);

        if (isCorrect) {
            selectedButton.classList.add('correct');
            quizFeedback.textContent = '✅ נכון מאוד!';
            correctAnswersCount++;
        } else {
            selectedButton.classList.add('incorrect');
            quizFeedback.textContent = '❌ לא נכון. התשובה הנכונה היא: ' + quizDeck[currentQuizIndex].english;
            
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
        // הציון מוצג כ: מספר התשובות הנכונות / מספר השאלות שניגשו אליהן עד כה
        scoreDisplay.textContent = `ניקוד: ${correctAnswersCount} / ${currentQuizIndex + 1}`; 
    }

    function showQuizSummary() {
        const totalQuestions = quizDeck.length;
        const percentage = totalQuestions > 0 ? Math.round((correctAnswersCount / totalQuestions) * 100) : 0;

        quizQuestionHebrew.textContent = ''; 
        answerOptionsGrid.innerHTML = ''; 
        quizFeedback.textContent = '';
        nextQuizBtn.style.display = 'none';

        finalScoreText.innerHTML = `ענית נכון על **${correctAnswersCount}** שאלות מתוך **${totalQuestions}**!<br> (ציון: **${percentage}%**)`;
        
        quizSummary.style.display = 'block';
        scoreDisplay.textContent = ''; // מנקה את הניקוד בתצוגת הסיכום
    }

    // --- אירועים ואתחול ---

    flashcard.addEventListener('click', flipCard);
    nextCardBtn.addEventListener('click', nextCard);
    backToTopicsBtn.addEventListener('click', backToTopics);
    
    nextQuizBtn.addEventListener('click', nextQuizQuestion);
    startQuizAgainBtn.addEventListener('click', () => startQuiz(currentTopicName));
    backToTopicsBtnQuiz.addEventListener('click', backToTopics);
    
    flashcardModeBtn.addEventListener('click', () => switchMode('flashcards'));
    quizModeBtn.addEventListener('click', () => switchMode('quiz'));

    // אתחול האפליקציה בטעינה
    switchMode('flashcards');
});