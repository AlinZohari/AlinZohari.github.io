export type Project = {
  title: string;
  subtitle: string;
  description: string;
  repoUrl: string;
  highlights: string[];
  images: { src: string; alt: string }[];
};

export const profile = {
  name: "Alin Zohari",
  role: "Geospatial Science (GIS and Computing) Graduate",
  location: "London, UK",
  email: "zohari.alin@gmail.com",
  bio: "I work across geospatial analysis, GIS workflows, and data-focused software projects.",
  about:
    "My background includes roles in geospatial processing, public-sector casework support, and technical teaching. I have worked with UAV photogrammetry, lidar datasets, and GIS tools, and I completed an MSc focused on GIS and computing at UCL.",
  links: {
    github: "https://github.com/AlinZohari",
    linkedin: "https://www.linkedin.com/in/alinzohari/",
    cv: "/doc/2606_Alin_Zohari.pdf"
  },
  experience: [
    "Business Officer, Historic England (2024-Present)",
    "Curriculum and Club Teacher, BetaGen Academy (Part-time, 2024-Present)",
    "GIS Analyst and Technician, Malvus Sense (2020-2022)",
    "Administrator Assistant, HZF Resources (2022-2023)"
  ],
  education: [
    "MSc Geospatial Science and Computing - University College London",
    "BSc Earth and Ocean Science - University of Brighton"
  ],
  skills: [
    "Python",
    "R and R Markdown",
    "JavaScript, HTML, CSS, Node.js",
    "GIS & Spatial Analysis",
    "Remote Sensing",
    "Photogrammetry (SfM) and Lidar Processing",
    "Machine Learning and NLP",
    "PostgreSQL/PostGIS",
    "FME, Pix4D, QGIS, GDAL, GeoPandas",
    "Data Visualization and Technical Documentation",
    "Project and Grant Process Management"
  ]
};

export const projects: Project[] = [
  {
    title: "Information Extraction",
    subtitle: "Leveraging language models to extract orbital entities",
    description:
      "Extracted 11 orbital environment entities from unstructured FCC documents using in-context learning, retrieval QA, and fine-tuned QA approaches.",
    repoUrl: "https://github.com/AlinZohari/InformationExtraction",
    highlights: [
      "Compared three NLP extraction approaches",
      "Measured recall, precision, and F1-score",
      "Built reproducible analysis workflow"
    ],
    images: [
      { src: "/img/InfoExtract/methods.jpg", alt: "Information extraction methodology" },
      { src: "/img/InfoExtract/recallPrecision.jpg", alt: "Precision and recall results" }
    ]
  },
  {
    title: "Assets Management App (Frontend)",
    subtitle: "Leaflet-based interface for field and desktop workflows",
    description:
      "Developed the frontend for an asset creation and condition-assessment application with responsive forms, mapping workflows, and visualization menus.",
    repoUrl: "https://github.com/AlinZohari/APP-AssetsManagement",
    highlights: [
      "Responsive form behavior by screen size",
      "Interactive map-driven data capture",
      "Visualization menu for condition reporting"
    ],
    images: [
      { src: "/img/FrontEnd/assetCreation.jpg", alt: "Asset creation UI" },
      { src: "/img/FrontEnd/graph.jpg", alt: "Condition report graph" }
    ]
  },
  {
    title: "Assets Management API (Backend)",
    subtitle: "RESTful API for geospatial asset data",
    description:
      "Designed RESTful endpoints backed by PostgreSQL to manage assets and return JSON/GeoJSON payloads for client applications.",
    repoUrl: "https://github.com/AlinZohari/RESTfulAPI-AssetsManagement",
    highlights: [
      "Implemented CRUD endpoint patterns",
      "Delivered JSON and GeoJSON endpoints",
      "Structured API routes for maintainability"
    ],
    images: [
      { src: "/img/BackEnd/crudEndpoints.jpg", alt: "CRUD endpoint structure" },
      { src: "/img/BackEnd/geojsonEndpoints.jpg", alt: "GeoJSON endpoint output" }
    ]
  },
  {
    title: "Spatial-Temporal Crime Analysis",
    subtitle: "DBSCAN and ST-DBSCAN for theft clustering",
    description:
      "Analyzed theft data in Chicago using KDE, DBSCAN, and ST-DBSCAN to identify high-risk spatial and temporal patterns.",
    repoUrl: "https://github.com/AlinZohari/STDM",
    highlights: [
      "Applied density estimation and clustering",
      "Validated parameters with silhouette scores",
      "Visualized time-of-day cluster behavior"
    ],
    images: [
      { src: "/img/STDM/KDEtheftJuly.jpg", alt: "KDE theft distribution" },
      { src: "/img/STDM/STDBSCANpartDay.jpg", alt: "ST-DBSCAN clustering by time" }
    ]
  },
  {
    title: "Flood Emergency Planning",
    subtitle: "Evacuation support tool for Isle of Wight",
    description:
      "Built a flood-response decision tool that identifies safer high-ground destinations and shortest walking routes within a 5 km radius.",
    repoUrl: "https://github.com/AlinZohari/Flood-Emergency",
    highlights: [
      "Route optimization for emergency scenarios",
      "Topography-aware safety planning",
      "User-friendly geospatial decision support"
    ],
    images: [{ src: "/img/floodEmerg/pic.jpg", alt: "Flood emergency planning interface" }]
  }
];
