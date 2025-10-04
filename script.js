document.addEventListener('DOMContentLoaded', () => {
    // --- הגדרות קבועות ---
    const TOPIC_COLORS = [
        '#007bff', '#28a745', '#ffc107', '#dc3545', '#20c997', 
        '#6610f2', '#e83e8c', '#fd7e14', '#6f42c1', '#800000', 
        '#000080', '#808000', '#DC143C', '#008B8B', '#6A5ACD', 
        '#228B22', '#FFD700', '#87CEEB', '#FF7F50', '#DA70D6', 
        '#D2691E', '#3CB371', '#4169E1', '#8B008B', '#FF8C00'
    ];

    // --- נתוני הכרטיסיות המלאים (מעודכנים עם המילים החדשות) ---
    const ALL_TOPICS_DATA = { 
        "Simple Conversation": [ 
            { english: "Hello", hebrew: "שלום" },
            { english: "Goodbye", hebrew: "להתראות" },
            { english: "Please", hebrew: "בבקשה" },
            { english: "Thank You", hebrew: "תודה" },
            { english: "Excuse Me", hebrew: "סליחה" },
            { english: "You're welcome", hebrew: "על לא דבר" }, // מילה חדשה
            { english: "Sorry", hebrew: "מצטער" }, // מילה חדשה
            { english: "No", hebrew: "לא" }, // מילה חדשה
            { english: "How are you?", hebrew: "מה שלומך?" }, // מילה חדשה
            { english: "I'm fine", hebrew: "אני בסדר" }, // מילה חדשה
            { english: "What's your name?", hebrew: "איך קוראים לך?" }, // מילה חדשה
            { english: "My name is...", hebrew: "קוראים לי..." }, // מילה חדשה
            { english: "Nice to meet you", hebrew: "נעים להכיר" }, // מילה חדשה
            { english: "Where are you from?", hebrew: "מאיפה אתה?" }, // מילה חדשה
            { english: "I'm from...", hebrew: "אני מ..." }, // מילה חדשה
            { english: "How old are you?", hebrew: "בן כמה אתה?" }, // מילה חדשה
            { english: "I'm ... years old", hebrew: "אני בן..." }, // מילה חדשה
            { english: "See you later", hebrew: "נתראה אחר כך" } // מילה חדשה
        ],
        "Professions": [ 
            { english: "Doctor", hebrew: "רופא/ה" },
            { english: "Teacher", hebrew: "מורה" },
            { english: "Engineer", hebrew: "מהנדס/ת" },
            { english: "Chef", hebrew: "שף / טבח" },
            { english: "Pilot", hebrew: "טייס/ת" },
            { english: "Student", hebrew: "תלמיד" }, // מילה חדשה
            { english: "Nurse", hebrew: "אחות" }, // מילה חדשה
            { english: "Farmer", hebrew: "חקלאי" }, // מילה חדשה
            { english: "Firefighter", hebrew: "כבאי" }, // מילה חדשה
            { english: "Police officer", hebrew: "שוטר" }, // מילה חדשה
            { english: "Soldier", hebrew: "חייל" }, // מילה חדשה
            { english: "Waiter", hebrew: "מלצר" }, // מילה חדשה
            { english: "Driver", hebrew: "נהג" }, // מילה חדשה
            { english: "Artist", hebrew: "אומן/ית" }, // מילה חדשה
            { english: "Singer", hebrew: "זמר/ת" }, // מילה חדשה
            { english: "Actor", hebrew: "שחקן/ית" }, // מילה חדשה
            { english: "Writer", hebrew: "סופר" }, // מילה חדשה
            { english: "Builder", hebrew: "בנאי" }, // מילה חדשה
            { english: "Carpenter", hebrew: "נגר" }, // מילה חדשה
            { english: "Mechanic", hebrew: "מכונאי" }, // מילה חדשה
            { english: "Dentist", hebrew: "רופא שיניים" }, // מילה חדשה
            { english: "Scientist", hebrew: "מדען" } // מילה חדשה
        ],
        "Seasons and Weather": [ 
            { english: "Summer", hebrew: "קיץ" },
            { english: "Winter", hebrew: "חורף" },
            { english: "Rain", hebrew: "גשם" },
            { english: "Sunny", hebrew: "שמשי" },
            { english: "Cloudy", hebrew: "מעונן" },
            { english: "Spring", hebrew: "אביב" }, // מילה חדשה
            { english: "Autumn / Fall", hebrew: "סתיו" }, // מילה חדשה
            { english: "Hot", hebrew: "חם" }, // מילה חדשה
            { english: "Cold", hebrew: "קר" }, // מילה חדשה
            { english: "Warm", hebrew: "חמים" }, // מילה חדשה
            { english: "Cool", hebrew: "קריר" }, // מילה חדשה
            { english: "Snow", hebrew: "שלג" }, // מילה חדשה
            { english: "Wind", hebrew: "רוח" }, // מילה חדשה
            { english: "Storm", hebrew: "סערה" }, // מילה חדשה
            { english: "Lightning", hebrew: "ברק" }, // מילה חדשה
            { english: "Thunder", hebrew: "רעם" }, // מילה חדשה
            { english: "Rainbow", hebrew: "קשת בענן" }, // מילה חדשה
            { english: "Fog", hebrew: "ערפל" }, // מילה חדשה
            { english: "Ice", hebrew: "קרח" }, // מילה חדשה
            { english: "Hail", hebrew: "ברד" }, // מילה חדשה
            { english: "Temperature", hebrew: "טמפרטורה" }, // מילה חדשה
            { english: "Weather", hebrew: "מזג אוויר" } // מילה חדשה
        ],
        "Family Members": [ 
            { english: "Mother", hebrew: "אמא" },
            { english: "Father", hebrew: "אבא" },
            { english: "Sister", hebrew: "אחות" },
            { english: "Brother", hebrew: "אח" },
            { english: "Grandparent", hebrew: "סבא / סבתא" },
            { english: "Parents", hebrew: "הורים" }, // מילה חדשה
            { english: "Daughter", hebrew: "בת" }, // מילה חדשה
            { english: "Son", hebrew: "בן" }, // מילה חדשה (נוספה להשלמה)
            { english: "Grandfather", hebrew: "סבא" }, // מילה חדשה
            { english: "Grandmother", hebrew: "סבתא" }, // מילה חדשה
            { english: "Uncle", hebrew: "דוד" }, // מילה חדשה
            { english: "Aunt", hebrew: "דודה" }, // מילה חדשה
            { english: "Cousin", hebrew: "בן דוד / בת דודה" }, // מילה חדשה
            { english: "Nephew", hebrew: "אחיין" }, // מילה חדשה
            { english: "Niece", hebrew: "אחיינית" }, // מילה חדשה
            { english: "Husband", hebrew: "בעל" }, // מילה חדשה
            { english: "Wife", hebrew: "אישה (רעיה)" }, // מילה חדשה
            { english: "Child", hebrew: "ילד/ה" }, // מילה חדשה
            { english: "Children", hebrew: "ילדים" }, // מילה חדשה
            { english: "Baby", hebrew: "תינוק" }, // מילה חדשה
            { english: "Family", hebrew: "משפחה" } // מילה חדשה
        ],
        "Adjectives": [ 
            { english: "Happy", hebrew: "שמח" },
            { english: "Sad", hebrew: "עצוב" },
            { english: "Big", hebrew: "גדול" },
            { english: "Small", hebrew: "קטן" },
            { english: "Fast", hebrew: "מהיר" }, // יועבר ל-Adjectives Part 2 בהתאם ל-PDF.
            { english: "Tall", hebrew: "גבוה" }, // מילה חדשה
            { english: "Short", hebrew: "נמוך" }, // מילה חדשה
            { english: "Long", hebrew: "ארוך" }, // מילה חדשה
            { english: "New", hebrew: "חדש" }, // מילה חדשה
            { english: "Old", hebrew: "ישן" }, // מילה חדשה (נוספה להשלמה)
            { english: "Young", hebrew: "צעיר" }, // מילה חדשה
            { english: "Good", hebrew: "טוב" }, // מילה חדשה
            { english: "Bad", hebrew: "רע" }, // מילה חדשה
            { english: "Angry", hebrew: "כועס" }, // מילה חדשה (הייתה רק ב-Part 2)
            { english: "Tired", hebrew: "עייף" }, // מילה חדשה (הייתה רק ב-Part 2)
            { english: "Strong", hebrew: "חזק" }, // מילה חדשה
            { english: "Weak", hebrew: "חלש" }, // מילה חדשה
            { english: "Beautiful", hebrew: "יפה" }, // מילה חדשה
            { english: "Ugly", hebrew: "מכוער" }, // מילה חדשה
            { english: "Clean", hebrew: "נקי" }, // מילה חדשה
            { english: "Dirty", hebrew: "מלוכלך" } // מילה חדשה
        ],
        "Adjectives Part 2": [ 
            { english: "Tired", hebrew: "עייף" }, // נשאר למרות הוספה ל-Adjectives
            { english: "Excited", hebrew: "נרגש" },
            { english: "Angry", hebrew: "כועס" }, // נשאר למרות הוספה ל-Adjectives
            { english: "Calm", hebrew: "רגוע" },
            { english: "Busy", hebrew: "עסוק" },
            { english: "Hot", hebrew: "חם" }, // מילה חדשה (הייתה רק ב-Seasons)
            { english: "Cold", hebrew: "קר" }, // מילה חדשה (הייתה רק ב-Seasons)
            { english: "Warm", hebrew: "חמים" }, // מילה חדשה
            { english: "Cool", hebrew: "קריר" }, // מילה חדשה
            { english: "Fast", hebrew: "מהיר" }, // הועבר לכאן מ-Adjectives
            { english: "Slow", hebrew: "איטי" }, // מילה חדשה
            { english: "Heavy", hebrew: "כבד" }, // מילה חדשה
            { english: "Light", hebrew: "קל" }, // מילה חדשה
            { english: "Funny", hebrew: "מצחיק" }, // מילה חדשה
            { english: "Serious", hebrew: "רציני" }, // מילה חדשה
            { english: "Smart", hebrew: "חכם" }, // מילה חדשה
            { english: "Stupid", hebrew: "טיפש" }, // מילה חדשה
            { english: "Rich", hebrew: "עשיר" }, // מילה חדשה
            { english: "Poor", hebrew: "עני" }, // מילה חדשה
            { english: "Friendly", hebrew: "ידידותי" }, // מילה חדשה
            { english: "Polite", hebrew: "מנומס" }, // מילה חדשה
            { english: "Rude", hebrew: "גס רוח" }, // מילה חדשה
            { english: "Quiet", hebrew: "שקט" }, // מילה חדשה
            { english: "Noisy", hebrew: "רועש" }, // מילה חדשה
            { english: "Lazy", hebrew: "עצלן" } // מילה חדשה
        ],
        "School Supplies": [ 
            { english: "Pencil", hebrew: "עיפרון" },
            { english: "Eraser", hebrew: "מחק" },
            { english: "Book", hebrew: "ספר" },
            { english: "Backpack", hebrew: "ילקוט" },
            { english: "Scissors", hebrew: "מספריים" },
            { english: "Pen", hebrew: "עט" }, // מילה חדשה
            { english: "Sharpener", hebrew: "מחדד" }, // מילה חדשה
            { english: "Ruler", hebrew: "סרגל" }, // מילה חדשה
            { english: "Notebook", hebrew: "מחברת" }, // מילה חדשה
            { english: "Bag", hebrew: "תיק" }, // מילה חדשה
            { english: "Paper", hebrew: "נייר" }, // מילה חדשה
            { english: "Desk", hebrew: "שולחן כתיבה" }, // מילה חדשה
            { english: "Chair", hebrew: "כיסא" }, // מילה חדשה
            { english: "Board", hebrew: "לוח" }, // מילה חדשה
            { english: "Chalk", hebrew: "גיר" }, // מילה חדשה
            { english: "Marker", hebrew: "טוש" }, // מילה חדשה
            { english: "Highlighter", hebrew: "מרקר" }, // מילה חדשה
            { english: "Calculator", hebrew: "מחשבון" }, // מילה חדשה
            { english: "Computer", hebrew: "מחשב" }, // מילה חדשה
            { english: "Tablet", hebrew: "טאבלט" } // מילה חדשה
        ],
        "Days and Months": [ 
            { english: "Monday", hebrew: "יום שני" },
            { english: "Sunday", hebrew: "יום ראשון" },
            { english: "January", hebrew: "ינואר" },
            { english: "December", hebrew: "דצמבר" },
            { english: "Yesterday", hebrew: "אתמול" },
            { english: "Days of the Week", hebrew: "ימי השבוע" }, // מילה חדשה
            { english: "Tuesday", hebrew: "יום שלישי" }, // מילה חדשה
            { english: "Wednesday", hebrew: "יום רביעי" }, // מילה חדשה
            { english: "Thursday", hebrew: "יום חמישי" }, // מילה חדשה
            { english: "Friday", hebrew: "יום שישי" }, // מילה חדשה
            { english: "Saturday", hebrew: "שבת" }, // מילה חדשה
            { english: "Months of the Year", hebrew: "חודשי השנה" }, // מילה חדשה
            { english: "February", hebrew: "פברואר" }, // מילה חדשה
            { english: "March", hebrew: "מרץ" }, // מילה חדשה
            { english: "April", hebrew: "אפריל" }, // מילה חדשה
            { english: "May", hebrew: "מאי" }, // מילה חדשה (נוספה להשלמה)
            { english: "June", hebrew: "יוני" }, // מילה חדשה
            { english: "July", hebrew: "יולי" }, // מילה חדשה (נוספה להשלמה)
            { english: "August", hebrew: "אוגוסט" }, // מילה חדשה
            { english: "September", hebrew: "ספטמבר" }, // מילה חדשה
            { english: "October", hebrew: "אוקטובר" }, // מילה חדשה
            { english: "November", hebrew: "נובמבר" } // מילה חדשה
        ],
        "Food": [ 
            { english: "Pizza", hebrew: "פיצה" },
            { english: "Bread", hebrew: "לחם" },
            { english: "Cheese", hebrew: "גבינה" },
            { english: "Soup", hebrew: "מרק" },
            { english: "Cake", hebrew: "עוגה" },
            { english: "Rice", hebrew: "אורז" }, // מילה חדשה
            { english: "Pasta", hebrew: "פסטה" }, // מילה חדשה
            { english: "Meat", hebrew: "בשר" }, // מילה חדשה
            { english: "Chicken", hebrew: "עוף" }, // מילה חדשה
            { english: "Fish", hebrew: "דג" }, // מילה חדשה
            { english: "Egg", hebrew: "ביצה" }, // מילה חדשה
            { english: "Butter", hebrew: "חמאה" }, // מילה חדשה
            { english: "Milk", hebrew: "חלב" }, // מילה חדשה (הייתה רק ב-Drinks)
            { english: "Yogurt", hebrew: "יוגורט" }, // מילה חדשה
            { english: "Salad", hebrew: "סלט" }, // מילה חדשה
            { english: "Sandwich", hebrew: "סנדוויץ'" }, // מילה חדשה
            { english: "Ice cream", hebrew: "גלידה" }, // מילה חדשה
            { english: "Chocolate", hebrew: "שוקולד" }, // מילה חדשה
            { english: "Sugar", hebrew: "סוכר" }, // מילה חדשה
            { english: "Salt", hebrew: "מלח" } // מילה חדשה
        ],
        "Vegetables": [ 
            { english: "Tomato", hebrew: "עגבנייה" },
            { english: "Carrot", hebrew: "גזר" },
            { english: "Potato", hebrew: "תפוח אדמה" },
            { english: "Cucumber", hebrew: "מלפפון" },
            { english: "Onion", hebrew: "בצל" },
            { english: "Garlic", hebrew: "שום" }, // מילה חדשה
            { english: "Pepper", hebrew: "פלפל" }, // מילה חדשה
            { english: "Lettuce", hebrew: "חסה" }, // מילה חדשה
            { english: "Cabbage", hebrew: "כרוב" }, // מילה חדשה
            { english: "Cauliflower", hebrew: "כרובית" }, // מילה חדשה
            { english: "Broccoli", hebrew: "ברוקולי" }, // מילה חדשה
            { english: "Corn", hebrew: "תירס" }, // מילה חדשה
            { english: "Pea", hebrew: "אפונה" }, // מילה חדשה
            { english: "Bean", hebrew: "שעועית" }, // מילה חדשה
            { english: "Mushroom", hebrew: "פטרייה" }, // מילה חדשה
            { english: "Zucchini", hebrew: "קישוא" }, // מילה חדשה
            { english: "Eggplant", hebrew: "חציל" }, // מילה חדשה
            { english: "Pumpkin", hebrew: "דלעת" }, // מילה חדשה
            { english: "Radish", hebrew: "צנון/צנונית" }, // מילה חדשה
            { english: "Celery", hebrew: "סלרי" } // מילה חדשה
        ],
        "Drinks": [ 
            { english: "Water", hebrew: "מים" },
            { english: "Juice", hebrew: "מיץ" },
            { english: "Coffee", hebrew: "קפה" },
            { english: "Tea", hebrew: "תה" },
            { english: "Milk", hebrew: "חלב" },
            { english: "Hot chocolate", hebrew: "שוקו חם" }, // מילה חדשה
            { english: "Lemonade", hebrew: "לימונדה" }, // מילה חדשה
            { english: "Cola", hebrew: "קולה" }, // מילה חדשה
            { english: "Soda", hebrew: "סודה" }, // מילה חדשה
            { english: "Mineral water", hebrew: "מים מינרליים" }, // מילה חדשה
            { english: "Orange juice", hebrew: "מיץ תפוזים" }, // מילה חדשה
            { english: "Apple juice", hebrew: "מיץ תפוחים" }, // מילה חדשה
            { english: "Grape juice", hebrew: "מיץ ענבים" }, // מילה חדשה
            { english: "Milkshake", hebrew: "מילקשייק" }, // מילה חדשה
            { english: "Smoothie", hebrew: "סמוטי" }, // מילה חדשה
            { english: "Energy drink", hebrew: "משקה אנרגיה" }, // מילה חדשה
            { english: "Iced tea", hebrew: "תה קר" }, // מילה חדשה
            { english: "Ice coffee", hebrew: "קפה קר" }, // מילה חדשה
            { english: "Wine", hebrew: "יין" }, // מילה חדשה
            { english: "Beer", hebrew: "בירה" } // מילה חדשה
        ],
        "At the Zoo": [ 
            { english: "Lion", hebrew: "אריה" },
            { english: "Elephant", hebrew: "פיל" },
            { english: "Monkey", hebrew: "קוף" },
            { english: "Tiger", hebrew: "נמר" },
            { english: "Bear", hebrew: "דוב" },
            { english: "Giraffe", hebrew: "ג'ירפה" }, // מילה חדשה
            { english: "Zebra", hebrew: "זברה" }, // מילה חדשה
            { english: "Gorilla", hebrew: "גורילה" }, // מילה חדשה
            { english: "Panda", hebrew: "פנדה" }, // מילה חדשה
            { english: "Kangaroo", hebrew: "קנגורו" }, // מילה חדשה
            { english: "Hippo", hebrew: "היפופוטם" }, // מילה חדשה
            { english: "Rhino", hebrew: "קרנף" }, // מילה חדשה
            { english: "Crocodile", hebrew: "תנין" }, // מילה חדשה
            { english: "Snake", hebrew: "נחש" }, // מילה חדשה
            { english: "Turtle", hebrew: "צב" }, // מילה חדשה
            { english: "Parrot", hebrew: "תוכי" }, // מילה חדשה
            { english: "Flamingo", hebrew: "פלמינגו" }, // מילה חדשה
            { english: "Penguin", hebrew: "פינגווין" }, // מילה חדשה
            { english: "Camel", hebrew: "גמל" }, // מילה חדשה
            { english: "Fox", hebrew: "שועל" } // מילה חדשה
        ],
        "Birds and Insects": [ 
            { english: "Bird", hebrew: "ציפור" },
            { english: "Bee", hebrew: "דבורה" },
            { english: "Butterfly", hebrew: "פרפר" },
            { english: "Ant", hebrew: "נמלה" },
            { english: "Fly", hebrew: "זבוב" },
            { english: "Crow", hebrew: "עורב" }, // מילה חדשה
            { english: "Sparrow", hebrew: "דרור" }, // מילה חדשה
            { english: "Dove", hebrew: "יונה" }, // מילה חדשה
            { english: "Eagle", hebrew: "נשר" }, // מילה חדשה
            { english: "Owl", hebrew: "ינשוף" }, // מילה חדשה
            { english: "Duck", hebrew: "ברווז" }, // מילה חדשה
            { english: "Goose", hebrew: "אווז" }, // מילה חדשה
            { english: "Rooster", hebrew: "תרנגול" }, // מילה חדשה
            { english: "Hen", hebrew: "תרנגולת" }, // מילה חדשה
            { english: "Mosquito", hebrew: "יתוש" }, // מילה חדשה
            { english: "Grasshopper", hebrew: "חגב" }, // מילה חדשה
            { english: "Ladybug", hebrew: "פרת משה רבנו" }, // מילה חדשה
            { english: "Wasp", hebrew: "צרעה" }, // מילה חדשה
            { english: "Caterpillar", hebrew: "זחל" }, // מילה חדשה
            { english: "Dragonfly", hebrew: "שפירית" } // מילה חדשה
        ],
        "Shapes": [ 
            { english: "Circle", hebrew: "עיגול" },
            { english: "Square", hebrew: "ריבוע" },
            { english: "Triangle", hebrew: "משולש" },
            { english: "Star", hebrew: "כוכב" },
            { english: "Heart", hebrew: "לב" },
            { english: "Rectangle", hebrew: "מלבן" }, // מילה חדשה
            { english: "Oval", hebrew: "אליפסה" }, // מילה חדשה
            { english: "Diamond", hebrew: "מעוין/יהלום" }, // מילה חדשה
            { english: "Pentagon", hebrew: "מחומש" }, // מילה חדשה
            { english: "Hexagon", hebrew: "משושה" }, // מילה חדשה
            { english: "Octagon", hebrew: "מתומן" }, // מילה חדשה
            { english: "Line", hebrew: "קו" }, // מילה חדשה
            { english: "Curve", hebrew: "קו עגול" }, // מילה חדשה
            { english: "Arrow", hebrew: "חץ" }, // מילה חדשה
            { english: "Cube", hebrew: "קובייה" }, // מילה חדשה
            { english: "Sphere", hebrew: "כדור" }, // מילה חדשה
            { english: "Pyramid", hebrew: "פירמידה" }, // מילה חדשה
            { english: "Cylinder", hebrew: "גליל" }, // מילה חדשה
            { english: "Cone", hebrew: "חרוט" }, // מילה חדשה
            { english: "Shape", hebrew: "צורה" } // מילה חדשה
        ],
        "Colors": [ 
            { english: "Red", hebrew: "אדום" },
            { english: "Blue", hebrew: "כחול" },
            { english: "Yellow", hebrew: "צהוב" },
            { english: "Green", hebrew: "ירוק" },
            { english: "Purple", hebrew: "סגול" },
            { english: "Orange", hebrew: "כתום" }, // מילה חדשה
            { english: "Pink", hebrew: "ורוד" }, // מילה חדשה
            { english: "Brown", hebrew: "חום" }, // מילה חדשה
            { english: "Black", hebrew: "שחור" }, // מילה חדשה
            { english: "White", hebrew: "לבן" }, // מילה חדשה
            { english: "Gray", hebrew: "אפור" }, // מילה חדשה
            { english: "Gold", hebrew: "זהב" }, // מילה חדשה
            { english: "Silver", hebrew: "כסף" }, // מילה חדשה
            { english: "Light blue", hebrew: "תכלת" }, // מילה חדשה
            { english: "Dark blue", hebrew: "כחול כהה" } // מילה חדשה
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
            { english: "Hot", hebrew: "חם" },
            { english: "Cold", hebrew: "קר" },
            { english: "Up", hebrew: "למעלה" },
            { english: "Down", hebrew: "למטה" },
            { english: "In", hebrew: "בפנים" },
            { english: "Out", hebrew: "בחוץ" },
            { english: "Front", hebrew: "חזית" },
            { english: "Back", hebrew: "אחורה" },
            { english: "Open", hebrew: "פתוח" },
            { english: "Close", hebrew: "סגור" }
        ],
        "Body Parts": [
            { english: "Head", hebrew: "ראש" }, // קטגוריה חדשה
            { english: "Face", hebrew: "פנים" }, // קטגוריה חדשה
            { english: "Hair", hebrew: "שיער" }, // קטגוריה חדשה
            { english: "Eye", hebrew: "עין" }, // קטגוריה חדשה
            { english: "Ear", hebrew: "אוזן" }, // קטגוריה חדשה
            { english: "Nose", hebrew: "אף" }, // קטגוריה חדשה
            { english: "Mouth", hebrew: "פה" }, // קטגוריה חדשה
            { english: "Teeth", hebrew: "שיניים" }, // קטגוריה חדשה
            { english: "Tongue", hebrew: "לשון" }, // קטגוריה חדשה
            { english: "Neck", hebrew: "צוואר" }, // קטגוריה חדשה
            { english: "Shoulder", hebrew: "כתף" }, // קטגוריה חדשה
            { english: "Arm", hebrew: "זרוע" }, // קטגוריה חדשה
            { english: "Hand", hebrew: "יד" }, // קטגוריה חדשה
            { english: "Finger", hebrew: "אצבע" }, // קטגוריה חדשה
            { english: "Leg", hebrew: "רגל" }, // קטגוריה חדשה
            { english: "Knee", hebrew: "ברך" }, // קטגוריה חדשה
            { english: "Foot", hebrew: "כף רגל" }, // קטגוריה חדשה
            { english: "Toe", hebrew: "אצבע רגל" }, // קטגוריה חדשה
            { english: "Back", hebrew: "גב" }, // קטגוריה חדשה
            { english: "Stomach", hebrew: "בטן" } // קטגוריה חדשה
        ],
        "Bathroom": [
            { english: "Bath", hebrew: "אמבטיה" }, // קטגוריה חדשה
            { english: "Shower", hebrew: "מקלחת" }, // קטגוריה חדשה
            { english: "Sink", hebrew: "כיור" }, // קטגוריה חדשה
            { english: "Toilet", hebrew: "שירותים" }, // קטגוריה חדשה
            { english: "Mirror", hebrew: "מראה" }, // קטגוריה חדשה
            { english: "Soap", hebrew: "סבון" }, // קטגוריה חדשה
            { english: "Shampoo", hebrew: "שמפו" } // קטגוריה חדשה
        ],
        "Time and Place": [
            { english: "Today", hebrew: "היום" }, // קטגוריה חדשה (לקוח מהסוף של ה-PDF)
            { english: "Tomorrow", hebrew: "מחר" }, // קטגוריה חדשה
            { english: "Now", hebrew: "עכשיו" }, // קטגוריה חדשה
            { english: "Later", hebrew: "אחר כך" }, // קטגוריה חדשה
            { english: "Here", hebrew: "כאן" }, // קטגוריה חדשה
            { english: "There", hebrew: "שם" }, // קטגוריה חדשה
            { english: "Everyone", hebrew: "כולם" } // קטגוריה חדשה
        ]
    };

    // --- אלמנטים נבחרים מה-DOM (לא שונו) ---
    const topicSelectionArea = document.getElementById('topic-selection-area');
    const topicButtonsGrid = document.getElementById('topic-buttons-grid');
    const startSelectedTopicsBtn = document.getElementById('start-selected-topics-btn');

    const flashcardArea = document.getElementById('flashcard-area');
    const flashcard = document.getElementById('flashcard');
    const flashcardTopicTitle = document.getElementById('flashcard-topic-title');
    const cardContentEnglish = document.getElementById('card-content-english');
    const cardContentHebrew = document.getElementById('card-content-hebrew');
    const nextCardBtn = document.getElementById('next-card-btn');
    const backToTopicsBtn = document.getElementById('back-to-topics-btn');
    const cardCounter = document.getElementById('card-counter');

    const quizArea = document.getElementById('quiz-area');
    const quizTopicTitle = document.getElementById('quiz-topic-title');
    const scoreDisplay = document.getElementById('score-display');
    const quizQuestionHebrew = document.getElementById('quiz-question-hebrew');
    const answerOptionsGrid = document.getElementById('answer-options-grid');
    const quizFeedback = document.getElementById('quiz-feedback');
    const nextQuizBtn = document.getElementById('next-quiz-btn');
    const backToTopicsBtnQuiz = document.getElementById('back-to-topics-btn-quiz');
    const quizSummary = document.getElementById('quiz-summary');
    const finalScoreText = document.getElementById('final-score-text');
    const startQuizAgainBtn = document.getElementById('start-quiz-again-btn');
    
    const flashcardModeBtn = document.getElementById('flashcard-mode-btn');
    const quizModeBtn = document.getElementById('quiz-mode-btn');

    // --- משתני מצב ---
    let currentMode = 'flashcards'; // 'flashcards' or 'quiz'
    let selectedTopics = [];
    let currentDeck = [];
    let currentCardIndex = 0;

    let quizDeck = [];
    let currentQuizIndex = 0;
    let correctAnswersCount = 0;

    // --- פונקציות עזר (לא שונו) ---
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function switchMode(mode) {
        currentMode = mode;
        flashcardModeBtn.classList.remove('active');
        quizModeBtn.classList.remove('active');

        if (mode === 'flashcards') {
            flashcardModeBtn.classList.add('active');
        } else {
            quizModeBtn.classList.add('active');
        }
        
        // אתחול מחדש של מסך בחירת נושא
        selectedTopics = [];
        startSelectedTopicsBtn.disabled = true;
        startSelectedTopicsBtn.style.display = 'none';
        topicSelectionArea.style.display = 'block';
        flashcardArea.style.display = 'none';
        quizArea.style.display = 'none';
        generateTopicButtons();
    }

    function getTopicColor(topicName) {
        const topicNames = Object.keys(ALL_TOPICS_DATA);
        const index = topicNames.indexOf(topicName);
        if (index === -1) return TOPIC_COLORS[0]; // ברירת מחדל
        return TOPIC_COLORS[index % TOPIC_COLORS.length];
    }
    
    // --- לוגיקת בחירת נושא (לא שונתה) ---

    function generateTopicButtons() {
        topicButtonsGrid.innerHTML = '';
        Object.keys(ALL_TOPICS_DATA).forEach(topic => {
            const button = document.createElement('button');
            button.className = 'topic-btn';
            button.textContent = `${topic} (${ALL_TOPICS_DATA[topic].length} מילים)`;
            button.dataset.topic = topic;
            button.style.backgroundColor = getTopicColor(topic);
            
            if (selectedTopics.includes(topic)) {
                 button.classList.add('selected');
                 button.style.borderColor = 'white';
            }
            
            button.addEventListener('click', () => toggleTopicSelection(topic, button));
            topicButtonsGrid.appendChild(button);
        });
        
        // עדכון כפתור ההתחלה הראשי
        const selectedCount = selectedTopics.length;
        if (selectedCount > 0) {
            startSelectedTopicsBtn.textContent = currentMode === 'flashcards' ? 
                `התחל תרגול (${selectedCount} נושאים)` : `התחל מבחן (${selectedCount} נושאים)`;
            startSelectedTopicsBtn.disabled = false;
            startSelectedTopicsBtn.style.display = 'block';
        } else {
            startSelectedTopicsBtn.disabled = true;
            startSelectedTopicsBtn.style.display = 'none';
        }
    }

    function toggleTopicSelection(topic, button) {
        const index = selectedTopics.indexOf(topic);
        if (index > -1) {
            selectedTopics.splice(index, 1);
            button.classList.remove('selected');
            button.style.borderColor = 'transparent';
        } else {
            selectedTopics.push(topic);
            button.classList.add('selected');
            button.style.borderColor = 'white';
        }
        
        // עדכון כפתור ההתחלה הראשי
        const selectedCount = selectedTopics.length;
        if (selectedCount > 0) {
            startSelectedTopicsBtn.textContent = currentMode === 'flashcards' ? 
                `התחל תרגול (${selectedCount} נושאים)` : `התחל מבחן (${selectedCount} נושאים)`;
            startSelectedTopicsBtn.disabled = false;
            startSelectedTopicsBtn.style.display = 'block';
        } else {
            startSelectedTopicsBtn.disabled = true;
            startSelectedTopicsBtn.style.display = 'none';
        }
    }
    
    // --- לוגיקת מצב כרטיסיות (לא שונתה) ---

    function startFlashcards() {
        if (selectedTopics.length === 0) return;

        topicSelectionArea.style.display = 'none';
        quizArea.style.display = 'none';
        flashcardArea.style.display = 'block';
        
        currentDeck = [];
        selectedTopics.forEach(topic => {
            currentDeck.push(...ALL_TOPICS_DATA[topic]);
        });

        shuffleArray(currentDeck);
        currentCardIndex = 0;
        
        flashcardTopicTitle.textContent = selectedTopics.join(' + ');
        flashcardTopicTitle.style.color = getTopicColor(selectedTopics[0]);

        displayCurrentCard();
    }

    function displayCurrentCard() {
        if (currentDeck.length === 0) {
            cardContentEnglish.textContent = 'אין מילים לתרגול.';
            cardContentHebrew.textContent = 'בחר נושאים.';
            cardCounter.textContent = '0/0';
            nextCardBtn.style.display = 'none';
            return;
        }

        const card = currentDeck[currentCardIndex];
        flashcard.classList.remove('flipped');
        cardContentEnglish.textContent = card.english;
        cardContentHebrew.textContent = card.hebrew;
        
        cardContentEnglish.style.display = 'block';
        cardContentHebrew.style.display = 'none';
        
        cardCounter.textContent = `${currentCardIndex + 1} / ${currentDeck.length}`;
    }

    function flipCard() {
        const isFlipped = flashcard.classList.toggle('flipped');
        cardContentEnglish.style.display = isFlipped ? 'none' : 'block';
        cardContentHebrew.style.display = isFlipped ? 'block' : 'none';
    }

    function nextCard() {
        currentCardIndex = (currentCardIndex + 1) % currentDeck.length;
        displayCurrentCard();
    }

    function backToTopics() {
        selectedTopics = [];
        startSelectedTopicsBtn.disabled = true;
        startSelectedTopicsBtn.style.display = 'none';
        topicSelectionArea.style.display = 'block';
        flashcardArea.style.display = 'none';
        quizArea.style.display = 'none';
        quizSummary.style.display = 'none';
        generateTopicButtons();
    }

    // --- לוגיקת מצב מבחן (לא שונתה) ---
    
    function startQuiz() {
        if (selectedTopics.length === 0) return;
        
        topicSelectionArea.style.display = 'none';
        flashcardArea.style.display = 'none';
        quizArea.style.display = 'block';
        quizSummary.style.display = 'none';
        
        quizDeck = [];
        selectedTopics.forEach(topic => {
            // יוצר שאלות: אנגלית > עברית
            quizDeck.push(...ALL_TOPICS_DATA[topic].map(word => ({
                question: word.english,
                correctAnswer: word.hebrew,
                topic: topic
            })));
        });

        shuffleArray(quizDeck);
        
        currentQuizIndex = 0;
        correctAnswersCount = 0;
        
        quizTopicTitle.textContent = selectedTopics.join(' + ');
        quizTopicTitle.style.color = getTopicColor(selectedTopics[0]);

        nextQuizQuestion();
    }
    
    function generateOptions(correctAnswer, topic) {
        const allWords = Object.values(ALL_TOPICS_DATA).flat();
        const correctWord = allWords.find(w => w.hebrew === correctAnswer);
        
        let options = new Set([correctAnswer]);

        // ניסיון ראשון: לקחת מילים מאותו נושא
        const topicWords = ALL_TOPICS_DATA[topic] || [];
        
        // לקיחת 3 תשובות שגויות מתוך כלל המילים, או רק מהנושא אם יש מספיק
        const wrongAnswersPool = topicWords.filter(word => word.hebrew !== correctAnswer)
                                 .concat(allWords.filter(word => word.hebrew !== correctAnswer && !topicWords.includes(word)));

        shuffleArray(wrongAnswersPool);
        
        for (let i = 0; options.size < 4 && i < wrongAnswersPool.length; i++) {
            options.add(wrongAnswersPool[i].hebrew);
        }

        let optionsArray = Array.from(options);
        // אם אין מספיק אופציות (פחות מ-4), פשוט נחזיר מה שיש
        if (optionsArray.length < 4) {
             while(optionsArray.length < 4) optionsArray.push(`תשובה נוספת ${optionsArray.length + 1}`);
        }
        
        // לוודא שהתשובה הנכונה נמצאת
        if (!optionsArray.includes(correctAnswer)) {
            optionsArray[Math.floor(Math.random() * 4)] = correctAnswer;
        }

        shuffleArray(optionsArray);
        return optionsArray.slice(0, 4);
    }
    
    function nextQuizQuestion() {
        if (currentQuizIndex >= quizDeck.length) {
            showQuizSummary();
            return;
        }

        const currentQuestion = quizDeck[currentQuizIndex];
        
        // עדכון תצוגה
        quizQuestionHebrew.textContent = currentQuestion.question;
        scoreDisplay.textContent = `ניקוד: ${correctAnswersCount} / ${currentQuizIndex}`;
        quizFeedback.textContent = '';
        nextQuizBtn.style.display = 'none';
        answerOptionsGrid.innerHTML = '';
        
        const options = generateOptions(currentQuestion.correctAnswer, currentQuestion.topic);
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(button, option, currentQuestion.correctAnswer));
            answerOptionsGrid.appendChild(button);
        });
    }

    function checkAnswer(selectedButton, selectedAnswer, correctAnswer) {
        const allButtons = answerOptionsGrid.querySelectorAll('.answer-btn');
        allButtons.forEach(btn => btn.disabled = true); // מנטרל כפתורים
        
        if (selectedAnswer === correctAnswer) {
            selectedButton.classList.add('correct');
            quizFeedback.textContent = '✅ יפה מאוד! תשובה נכונה.';
            correctAnswersCount++;
        } else {
            selectedButton.classList.add('incorrect');
            quizFeedback.textContent = `❌ טעות. התשובה הנכונה היא: ${correctAnswer}`;
            // מדגיש את התשובה הנכונה
            allButtons.forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct');
                }
            });
        }
        
        // עדכון ניקוד ותצוגת הכפתור הבא
        scoreDisplay.textContent = `ניקוד: ${correctAnswersCount} / ${currentQuizIndex + 1}`;
        nextQuizBtn.style.display = 'block';
        currentQuizIndex++;
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
        scoreDisplay.textContent = ''; 
    }

    // --- אירועים ואתחול ---

    flashcard.addEventListener('click', flipCard);
    nextCardBtn.addEventListener('click', nextCard);
    backToTopicsBtn.addEventListener('click', backToTopics);
    
    nextQuizBtn.addEventListener('click', nextQuizQuestion);
    startQuizAgainBtn.addEventListener('click', startQuiz); 
    backToTopicsBtnQuiz.addEventListener('click', backToTopics);
    
    // לוגיקת כפתורי מצב
    flashcardModeBtn.addEventListener('click', () => switchMode('flashcards'));
    quizModeBtn.addEventListener('click', () => switchMode('quiz'));
    
    // כפתור התחלת המבחן (המרובה נושאים)
    startSelectedTopicsBtn.addEventListener('click', () => {
        if (currentMode === 'flashcards') {
            startFlashcards();
        } else {
            startQuiz();
        }
    });

    // אתחול ראשוני
    generateTopicButtons();
});