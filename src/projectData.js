// This file will act as our simple "database" for projects.
export const projectsData = [
  {
    slug: "recommendation-system-farmers", // URL-friendly ID
    title: "Recommendation System for Farmers",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    description: "Engineered a model to provide crop recommendations to farmers based on regional environmental and soil conditions.",
    githubLink: "https://github.com/Shehnazzazwala/Recommendation-System-for-Farmers",
    // --- New Case Study Details ---
    overview: "This project was developed to address the challenge farmers face in selecting the most suitable crops for their specific land conditions. By analyzing agricultural parameters like soil type, climate, and rainfall, the system provides data-driven recommendations to maximize yield and improve efficiency.",
    challenges: "A key challenge was sourcing and cleaning a comprehensive agricultural dataset. Ensuring the Random Forest model was properly trained without overfitting, while remaining accurate across diverse regional conditions, required careful feature engineering and hyperparameter tuning.",
    solution: "The final model, built with Scikit-learn, accurately predicts crop suitability. The system is designed to be a scalable tool that can help farmers make informed decisions, reducing risk and improving agricultural outcomes."
  },
  {
    slug: "swift-scan-traffic-monitoring",
    title: "Swift Scan: Real-Time Traffic Monitoring",
    tech: ["AI/ML", "YOLOv8", "SORT", "EasyOCR"],
    description: "Integrates vehicle detection, tracking, and license plate recognition to monitor traffic in real-time.",
    githubLink: "https://github.com/Shehnazzazwala/Swift-Scan-Real-Time-Traffic-Monitoring-System",
    overview: "Swift Scan is an advanced AI/ML project designed for real-time traffic analysis. It uses the state-of-the-art YOLOv8 model for object detection, the SORT algorithm for tracking vehicles across frames, and EasyOCR for accurate license plate recognition from video feeds.",
    challenges: "Maintaining tracking identity (ID) of vehicles in dense traffic or during occlusions was a major hurdle. Optimizing the models to run in real-time without sacrificing accuracy required careful configuration and leveraging hardware acceleration where possible. Reading license plates at various angles and lighting conditions also presented a significant challenge.",
    solution: "The combination of YOLO and SORT proved highly effective for robust tracking. For license plate recognition, image pre-processing techniques (like perspective transform and thresholding) were applied before passing the image to EasyOCR, significantly boosting its accuracy."
  },
  {
    slug: "pokemon-battle-game",
    title: "Pokemon Battle Game",
    tech: ["Python", "Pygame", "API Integration", "REST APIs"],
    description: "A fully functional Pokemon battle game using Pygame, featuring turn-based combat and dynamic game logic from an external API.",
    liveLink: "#",
    githubLink: "https://github.com/Shehnazzazwala/Pokemon-Battle-Game",
    overview: "This project is a nostalgic and interactive recreation of a classic Pokemon battle. It features a full graphical interface built with Pygame, turn-based combat logic, and dynamic fetching of Pokemon data (like stats, moves, and sprites) from the public PokeAPI.",
    challenges: "Managing the game state (e.g., whose turn it is, health points, status effects) in a clean and bug-free way was the primary challenge. Handling asynchronous API calls to fetch data without freezing the game's UI required careful implementation.",
    solution: "A state machine pattern was used to manage the flow of combat (player turn, attack animation, enemy turn, etc.). The game logic is decoupled from the rendering, making the code cleaner and easier to maintain. All necessary data is fetched at the start of the battle to ensure a smooth gameplay experience."
  },
  // Add more project details here in the same format
];