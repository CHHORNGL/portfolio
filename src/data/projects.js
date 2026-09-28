export const projects = [
  {
    id: "shoes-shopping-app",
    number: "01",
    title: "Shoes Shopping App",
    subtitle: "Mobile E-Commerce Experience",
    technologies: ["Flutter", "Dart"],
    description:
      "A mobile shopping application featuring product browsing, favorites, cart functionality, authentication, and a modern mobile interface.",
    features: [
      "Product browsing",
      "Product details",
      "Shopping cart",
      "Favorites",
      "Authentication",
      "Responsive UI"
    ],
    buttons: {
      github: "https://github.com/CHHORNGL/shoes_project",
      viewProject: true
    },
    // Detailed modal content
    overview:
      "A cross-platform mobile shopping application engineered with Flutter and Dart. Designed for seamless user interactions with snappy animations, smooth product browsing, persistent user favorites, and real-time shopping cart calculations.",
    problem:
      "Traditional mobile shopping apps often suffer from clunky navigation, poor responsiveness, and delayed cart calculation, leading to high cart abandonment rates on small mobile viewports.",
    solution:
      "Constructed a high-performance, reactive Flutter widget tree with clean state management, modular components, and fluid micro-interactions to create a native-feeling shopping journey.",
    category: "Mobile Application",
    accent: "from-sky-500/20 to-blue-500/20",
    glowColor: "rgba(56, 189, 248, 0.25)",
    previewType: "mobile"
  },
  {
    id: "coffee-shop-system",
    number: "02",
    title: "Coffee Shop Management System",
    subtitle: "Point of Sale & Inventory Platform",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    description:
      "A web-based coffee shop system with product management, categories, inventory management, cart functionality, and checkout.",
    features: [
      "Product management",
      "Category management",
      "Inventory",
      "Stock control",
      "Shopping cart",
      "Checkout",
      "Admin dashboard"
    ],
    buttons: {
      github: null, // Repository coming soon
      viewProject: true
    },
    // Detailed modal content
    overview:
      "A full-featured web-based management and Point of Sale (POS) system built for cafe operations. Features a dual-facing architecture: an intuitive cashier ordering counter and a comprehensive administrative dashboard for tracking menu items and inventory.",
    problem:
      "Manual coffee shop ordering and paper-based inventory tracking result in stock discrepancies, slow customer queues, and lack of visibility into daily beverage sales performance.",
    solution:
      "Developed a robust Laravel application backed by MySQL relational tables and styled with Tailwind CSS, enabling instant order placement, automatic inventory decrementing upon checkout, and actionable sales analytics.",
    category: "Web & POS Application",
    accent: "from-amber-500/20 to-orange-500/20",
    glowColor: "rgba(245, 158, 11, 0.25)",
    previewType: "pos"
  },
  {
    id: "management-info-system",
    number: "03",
    title: "Management Information System",
    subtitle: "Enterprise Workflow & Role-Based Access Control",
    technologies: ["Python", "FastAPI", "Oracle", "Docker"],
    description:
      "A management information system featuring authentication, role-based access control, inventory management, order management, and analytics.",
    features: [
      "JWT authentication",
      "RBAC",
      "Analytics dashboard",
      "Product management",
      "Inventory",
      "Orders",
      "Oracle database"
    ],
    buttons: {
      github: "https://github.com/Seavik2142/mis",
      viewProject: false
    },
    // Detailed modal content
    overview:
      "An enterprise-grade management information system designed to demonstrate scalable backend architecture, asynchronous Python performance, and transactional database integrity with Oracle Database in Docker containers.",
    problem:
      "Multi-department organizations require strict role segregation and auditability. Traditional monolithic backends often suffer from slow response times and loose permission enforcement.",
    solution:
      "Architected high-throughput asynchronous REST services using FastAPI, tokenized JWT authentication with granular RBAC permissions, and encapsulated the stack in Docker with normalized Oracle relational tables.",
    category: "Enterprise Backend System",
    accent: "from-indigo-500/20 to-purple-500/20",
    glowColor: "rgba(99, 102, 241, 0.25)",
    previewType: "dashboard"
  },
  {
    id: "agricultural-expert-system",
    number: "04",
    title: "Integrated Agricultural Expert System",
    subtitle: "Rule-Based Agricultural Advisory & Decision Support",
    technologies: ["Python", "AI", "Expert System", "Web"],
    description:
      "An intelligent agricultural system designed to provide rule-based recommendations and decision support.",
    features: [
      "Knowledge base",
      "Rule-based reasoning",
      "Agricultural recommendations",
      "AI-assisted decision support",
      "Web interface"
    ],
    buttons: {
      github: null, // Repository coming soon
      viewProject: false
    },
    // Detailed modal content
    overview:
      "An intelligent diagnostic decision-support platform designed to assist agricultural practitioners in Cambodia. Uses rule-based inference logic to assess crop symptoms, soil characteristics, and environmental conditions to recommend targeted crop care and disease mitigation strategies.",
    problem:
      "Smallholder farmers often lack immediate access to agricultural agronomists, resulting in delayed disease detection, improper fertilizer usage, and avoidable crop yield losses.",
    solution:
      "Built a forward-chaining inference engine in Python combined with a structured knowledge base, providing transparent, step-by-step diagnostic reasoning and practical recommendations accessible via a clean web interface.",
    category: "Intelligent Decision System",
    accent: "from-emerald-500/20 to-teal-500/20",
    glowColor: "rgba(16, 185, 129, 0.25)",
    previewType: "expert"
  }
];
