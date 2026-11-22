export const projects = [
  {
    id: "shoes-shopping-app",
    number: "01",
    title: "Shoes Shopping App",
    subtitle: "Mobile E-Commerce Experience",
    technologies: ["Flutter", "Dart", "State Management", "REST API"],
    categoryTag: "mobile",
    description:
      "A modern cross-platform mobile e-commerce application engineered with Flutter and Dart, featuring dynamic product browsing, persistent favorites, reactive cart calculations, and smooth micro-interactions.",
    features: [
      "Dynamic product catalog with filtering",
      "Interactive cart & instant checkout calculation",
      "Wishlist / persistent favorites system",
      "Responsive mobile layout (iOS & Android)",
      "Smooth 60 FPS transition animations",
      "Clean modular component architecture"
    ],
    buttons: {
      github: "https://github.com/CHHORNGL/shoes_project",
      viewProject: true
    },
    metrics: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Rendering", value: "60 FPS Native" },
      { label: "Architecture", value: "Modular State" }
    ],
    // Detailed modal content
    overview:
      "A cross-platform mobile shopping application engineered with Flutter and Dart. Designed for seamless user interactions with snappy animations, smooth product browsing, persistent user favorites, and real-time shopping cart calculations.",
    problem:
      "Traditional mobile shopping apps often suffer from clunky navigation, poor responsiveness, and delayed cart calculation, leading to high cart abandonment rates on small mobile viewports.",
    solution:
      "Constructed a high-performance, reactive Flutter widget tree with clean state management, modular components, and fluid micro-interactions to create a native-feeling shopping journey.",
    category: "Mobile Application",
    accent: "from-sky-500/20 via-blue-500/10 to-transparent",
    glowColor: "rgba(56, 189, 248, 0.25)",
    previewType: "mobile"
  },
  {
    id: "management-info-system",
    number: "02",
    title: "Management Information System (MIS)",
    subtitle: "Enterprise Workflow & Role-Based Access Control",
    technologies: ["Python", "FastAPI", "Oracle Database", "Docker", "JWT / RBAC"],
    categoryTag: "backend",
    description:
      "An enterprise-grade management information system featuring asynchronous REST APIs, granular Role-Based Access Control (RBAC), normalized Oracle database schema, and containerized Docker deployment.",
    features: [
      "High-throughput asynchronous FastAPI backend",
      "JWT-secured authentication & multi-tier RBAC",
      "Enterprise Oracle database transaction handling",
      "Containerized microservice stack via Docker",
      "Real-time analytics and inventory audit logging",
      "Normalized relational schema for transactional integrity"
    ],
    buttons: {
      github: "https://github.com/Seavik2142/mis",
      viewProject: true
    },
    metrics: [
      { label: "Backend API", value: "FastAPI / Python" },
      { label: "Database", value: "Oracle 19c" },
      { label: "Container", value: "Docker Compose" }
    ],
    // Detailed modal content
    overview:
      "An enterprise-grade management information system designed to demonstrate scalable backend architecture, asynchronous Python performance, and transactional database integrity with Oracle Database in Docker containers.",
    problem:
      "Multi-department organizations require strict role segregation and auditability. Traditional monolithic backends often suffer from slow response times and loose permission enforcement.",
    solution:
      "Architected high-throughput asynchronous REST services using FastAPI, tokenized JWT authentication with granular RBAC permissions, and encapsulated the stack in Docker with normalized Oracle relational tables.",
    category: "Enterprise Backend System",
    accent: "from-indigo-500/20 via-purple-500/10 to-transparent",
    glowColor: "rgba(99, 102, 241, 0.25)",
    previewType: "dashboard"
  },
  {
    id: "agricultural-expert-system",
    number: "03",
    title: "Integrated Agricultural Expert System",
    subtitle: "Rule-Based Agricultural Advisory & Decision Support",
    technologies: ["Python", "AI / Expert System", "Rule Engine", "Web Interface"],
    categoryTag: "ai",
    description:
      "An intelligent agritech expert system applying forward-chaining inference logic to diagnose crop diseases, analyze soil conditions, and generate actionable agricultural advisory for farmers.",
    features: [
      "Forward-chaining inference reasoning engine",
      "Comprehensive Cambodian crop disease knowledge base",
      "Multi-factor soil & environmental moisture diagnostics",
      "Deterministic decision confidence evaluation (94%+)",
      "Step-by-step transparent reasoning explanation",
      "Accessible web-based consultation interface"
    ],
    buttons: {
      github: null, // Repository coming soon
      viewProject: true
    },
    metrics: [
      { label: "Reasoning", value: "Forward Chaining" },
      { label: "Target", value: "Rice & Field Crops" },
      { label: "Confidence", value: "94.6% Avg" }
    ],
    // Detailed modal content
    overview:
      "An intelligent diagnostic decision-support platform designed to assist agricultural practitioners in Cambodia. Uses rule-based inference logic to assess crop symptoms, soil characteristics, and environmental conditions to recommend targeted crop care and disease mitigation strategies.",
    problem:
      "Smallholder farmers often lack immediate access to agricultural agronomists, resulting in delayed disease detection, improper fertilizer usage, and avoidable crop yield losses.",
    solution:
      "Built a forward-chaining inference engine in Python combined with a structured knowledge base, providing transparent, step-by-step diagnostic reasoning and practical recommendations accessible via a clean web interface.",
    category: "Intelligent Decision System",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    glowColor: "rgba(16, 185, 129, 0.25)",
    previewType: "expert"
  },
  {
    id: "coffee-shop-system",
    number: "04",
    title: "Coffee Shop Management System",
    subtitle: "Point of Sale & Inventory Platform",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "POS System"],
    categoryTag: "web",
    description:
      "A complete web-based coffee shop point-of-sale and administrative platform featuring dual-role interfaces for cashiers and managers, automated inventory decrements, and real-time sales reporting.",
    features: [
      "Dual interface: Cashier POS counter & Admin panel",
      "Live order calculation and receipt generation",
      "Automated stock reduction upon checkout completion",
      "Category and menu item management with image upload",
      "Relational MySQL schema with transactional safety",
      "Modern responsive UI built with Tailwind CSS"
    ],
    buttons: {
      github: null, // Repository coming soon
      viewProject: true
    },
    metrics: [
      { label: "Framework", value: "Laravel 11 / PHP" },
      { label: "Database", value: "MySQL Relational" },
      { label: "Design", value: "Tailwind CSS" }
    ],
    // Detailed modal content
    overview:
      "A full-featured web-based management and Point of Sale (POS) system built for cafe operations. Features a dual-facing architecture: an intuitive cashier ordering counter and a comprehensive administrative dashboard for tracking menu items and inventory.",
    problem:
      "Manual coffee shop ordering and paper-based inventory tracking result in stock discrepancies, slow customer queues, and lack of visibility into daily beverage sales performance.",
    solution:
      "Developed a robust Laravel application backed by MySQL relational tables and styled with Tailwind CSS, enabling instant order placement, automatic inventory decrementing upon checkout, and actionable sales analytics.",
    category: "Web & POS Application",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    glowColor: "rgba(245, 158, 11, 0.25)",
    previewType: "pos"
  }
];
