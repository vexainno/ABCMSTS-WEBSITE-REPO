import {
  Atom,
  BookOpen,
  Calculator,
  Code2,
  Cross,
  Dumbbell,
  FlaskConical,
  Globe2,
  GraduationCap,
  HeartPulse,
  History,
  Languages,
  Leaf,
  Library,
  MapPin,
  MessageSquare,
  Network,
  Microscope,
  PenTool,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

export const SCHOOL = {
  name: "Alexander B. Cummings Model Science and Technology School",
  shortName: "ABCMSTS",
  tagline: "Preparing the next generation of innovators, leaders, and problem-solvers",
  address: "Duport Road, Paynesville, Liberia",
  phone: "+231 77 559 1582",
  email: "abcmsts.edu@gmail.com",
  instagram: "https://www.instagram.com/abcmsts/",
  facebook: "https://www.facebook.com/wix",
  twitter: "https://www.twitter.com/wix",
  youtube: "https://www.youtube.com/user/Wix",
  founded: 2015,
};

export interface Subject {
  name: string;
  icon: LucideIcon;
}

export const JUNIOR_HIGH_SUBJECTS: Subject[] = [
  { name: "Mathematics", icon: Calculator },
  { name: "English", icon: BookOpen },
  { name: "General Science", icon: FlaskConical },
  { name: "Social Studies", icon: Globe2 },
  { name: "French", icon: Languages },
  { name: "Religious & Moral Education", icon: Cross },
  { name: "Computer Science", icon: Code2 },
  { name: "Physical Education", icon: Dumbbell },
  { name: "Agriculture", icon: Sprout },
  { name: "Counseling", icon: MessageSquare },
  { name: "Library", icon: Library },
];

export const SENIOR_HIGH_SUBJECTS: Subject[] = [
  { name: "English", icon: BookOpen },
  { name: "Mathematics", icon: Calculator },
  { name: "Biology", icon: Microscope },
  { name: "Chemistry", icon: FlaskConical },
  { name: "Physics", icon: Atom },
  { name: "History", icon: History },
  { name: "Geography", icon: MapPin },
  { name: "Economics", icon: PenTool },
  { name: "Counseling", icon: MessageSquare },
  { name: "ICT", icon: Network },
  { name: "Agriculture", icon: Leaf },
  { name: "Nursing Aid", icon: HeartPulse },
];

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const WHY_ABCMSTS: Feature[] = [
  {
    title: "STEM & Innovation",
    description:
      "A curriculum built around science, technology, engineering, and mathematics, equipping students with the tools to solve real-world problems.",
    icon: FlaskConical,
  },
  {
    title: "Academic Excellence",
    description:
      "Rigorous academic programs taught by experienced professionals, cultivating critical thinking and lifelong learning.",
    icon: GraduationCap,
  },
  {
    title: "Student Development",
    description:
      "Beyond the classroom, we nurture character, discipline, and personal growth through counseling and mentorship.",
    icon: Users,
  },
  {
    title: "Technology",
    description:
      "Modern computer science and ICT programs that prepare students for a digital future and a connected world.",
    icon: Code2,
  },
  {
    title: "Leadership",
    description:
      "We develop confident, responsible leaders who are ready to serve their communities and their nation.",
    icon: GraduationCap,
  },
  {
    title: "Community & National Pride",
    description:
      "Rooted in Liberian values, we foster a sense of national identity, civic responsibility, and voluntary service.",
    icon: HeartPulse,
  },
];

export interface Activity {
  slug: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];
}

const localImage = (name: string) => new URL(`../assets/images/${name}`, import.meta.url).href;

export const SCHOOL_LOGO = localImage("264108_63972c627fc740a08be69564fcd03f79~mv2.avif");

export const STUDENT_ACTIVITIES: Activity[] = [
  {
    slug: "science-fairs",
    title: "Science Fairs",
    description:
      "Students showcase innovative projects and experiments, demonstrating creativity and scientific understanding.",
    image: localImage("264108_a593345fe69d4d81b000be71282d9b96~mv2.jpg"),
    gallery: [
      "264108_a593345fe69d4d81b000be71282d9b96~mv2.jpg", "264108_b5d0a5e4307744e6a00c19514381744b~mv2.jpg", "264108_b7c53da797084517976e5a467d1a746c~mv2.jpg", "264108_d9cc79c78d4a4fd08ff57db1d9e5e885~mv2.jpg", "264108_1af8315fdcc44e6eb000c0873d2888ee~mv2.jpg", "264108_39e16ae959a447bb80e85321da4900da~mv2.jpg", "264108_0360875f94104e9285e17e5d8191719e~mv2.jpg", "264108_4cb71491112c4f7297b4ace5a0635d33~mv2.jpg", "264108_fba8b5762c9c4719aa333f9687d4ab57~mv2.jpg",
    ].map(localImage),
  },
  {
    slug: "agriculture-program",
    title: "Agriculture Program",
    description:
      "Hands-on agricultural education where students learn practical farming skills and food security principles.",
    image: localImage("264108_d23c2125531f41bcb313fd25de3b0768~mv2.jpeg"),
    gallery: [
      "264108_d23c2125531f41bcb313fd25de3b0768~mv2.jpeg", "264108_b9edb03aa4ec436d9730df02a0c61237~mv2.jpeg", "264108_99e48dadf7ee4338b6a0fb1a30482a43~mv2.jpeg", "264108_84328124531b43f0b98410421c7d90d3~mv2.jpeg",
    ].map(localImage),
  },
  {
    slug: "nursing-aid-practical",
    title: "Nursing Aid Practical Work",
    description:
      "Senior high students gain real-world healthcare skills through our Nursing Aid program and practical training.",
    image: localImage("264108_41d7137f1aea4ca09d9332793b616484~mv2.jpg"),
    gallery: [
      "264108_41d7137f1aea4ca09d9332793b616484~mv2.jpg", "264108_ed24f2a383c54079bd29740b703e0514~mv2.jpg", "264108_db7109a00e974f4dbe5d7411b2d48774~mv2.jpg", "264108_f2677beaef3f476c95ae656c58021130~mv2.jpg", "264108_c54f0f32206940fab6c3c0eac3034147~mv2.jpg", "264108_d6f12c2f472f45d9bff92059a30ecfbc~mv2.jpg", "264108_60dbd916a7694dec82c4d5ae5d4380bb~mv2.jpg", "264108_f2c19c5475b843f486e29dad8916fea4~mv2.jpg", "264108_b8bf46af57ef4b80af3648caa40fc464~mv2.jpg", "264108_baa0b06380cb4082ae7fa31ce19d7f42~mv2.jpg",
    ].map(localImage),
  },
  {
    slug: "airtad-competition",
    title: "AIRTAD Competition",
    description:
      "Students participate in the AIRTAD competition, showcasing innovation, research, and technology projects.",
    image: localImage("264108_74cf5ecc56454e4493e8594d6deb6b22~mv2.jpeg"),
    gallery: [
      "264108_a175502ec6614cc68b96d5ed479f7050~mv2.webp", "264108_74cf5ecc56454e4493e8594d6deb6b22~mv2.jpeg", "264108_8bb3526e03304a88a2e31ccfd2092142~mv2.jpeg", "264108_97f3954f06db471fba725984adfd27b6~mv2.jpeg", "264108_16441f402bf441569656148ced24e715~mv2.jpeg", "264108_a0ec0178c34a48319b84c5ebfab91763~mv2.jpeg", "264108_017c57390ea347639a93a59c1c216118~mv2.jpeg", "264108_f5de845f112844ad9400612cbb3bc0d1~mv2.jpeg", "264108_b8628fa1b38340bd91fe79bb452f5ebc~mv2.jpeg", "264108_2202716f001f438892b164000b532ba4~mv2.jpeg", "264108_dca5ed6b51ab4e2abf08c6e73e7734dd~mv2.jpeg", "264108_ef189f0f7e184ad6a5f5d8bf394f2550~mv2.jpeg", "264108_f2becbf53bbc4f32b3846ee0d9a788ee~mv2.jpeg", "264108_1a388031aa8c436ebc3b512d24940872~mv2.jpeg",
    ].map(localImage),
  },
  {
    slug: "baccalaureate-graduation",
    title: "Baccalaureate & Graduation",
    description:
      "Celebrating the achievements of our graduating classes with baccalaureate services and commencement ceremonies.",
    image: localImage("264108_b253b85301ee4989be499aa5922a4cca~mv2.jpg"),
    gallery: [
      "264108_b253b85301ee4989be499aa5922a4cca~mv2.jpg", "264108_bc2bf25d2a224fd18f4ed3c46f16506f~mv2.jpg", "264108_d4805ca19b104a73bca60e49a7240cd4~mv2.jpg", "264108_9feaaa3173074584ba15794b431346be~mv2.jpg", "264108_52d94ce4aae047c298012c06cf1dc43d~mv2.jpg", "264108_e8921fc4f57c44078fbf3a6a52e03dcc~mv2.jpg", "264108_0e302c90cc604776a14085bd69b77eab~mv2.jpg", "264108_186dae2a3a784ecab4b96b7c1f0b9b45~mv2.jpg", "264108_6d080161323d43be95de5e085d3ec873~mv2.jpg", "264108_b25d8aa76bf7420882fcd5ac087fa982~mv2.jpg", "264108_4141276c1a774162addef58105bbb0ce~mv2.jpg", "264108_0d0789839b15437e87634c7d3ac12991~mv2.jpg", "264108_7e6412e165ca438098013b760eb28d7f~mv2.jpg", "264108_1af8d8b3e6344bf792c8c8dd976faa0c~mv2.jpg", "264108_9f2eeaf78c7943c4babb1b3bf66aaa17~mv2.jpg", "264108_d2966be539b8491482f887d60a04c40b~mv2.jpg", "264108_2e781f4757fa4161a46c9666cba97ebe~mv2.jpg", "264108_5ec79585cbb843adad4e33ef5ce4d637~mv2.jpg", "264108_55e1cbddc3d8443b88271d68150fd6b7~mv2.jpg", "264108_cbb4bb8762c74093abff3273cd86604f~mv2.jpg", "264108_0be407c0e27544778ecc5f244c79410c~mv2.jpg", "264108_d5cc4cbc102444788b07f7bf87d7d6b4~mv2.jpg", "264108_c2261c7f1a32497299ddc329e1699cf4~mv2.jpg", "264108_3ba300b76d42401d824dcb274ee7d4ed~mv2.jpg", "264108_ce7e0e90bcba4f9e80777d9dab84a774~mv2.jpg", "264108_215b142e278648b19f908cef0fa5e8c9~mv2.jpg", "264108_b566e8fc50144e50a462e491101ce20f~mv2.jpg", "264108_bb530421d15c40dbbdba9775e71e4422~mv2.jpg", "264108_a29546bd72824464bcd9dc4d9797a02e~mv2.jpg", "264108_b322898a3faa478887088f6657e5a4b3~mv2.jpg", "264108_3e05f716598740519c771f21c79fb9ba~mv2.jpg", "264108_5a671bf21b1a43b2992ab9bc4c0b36d4~mv2.jpg", "264108_62fa38029e564e6f93a666f01bd9c95e~mv2.jpg", "264108_b93d8d6250fa437c9ba71e18e89be231~mv2.jpg", "264108_78e32cbbc94a411fb4b9f2321154a4b9~mv2.jpg", "264108_7f238f1fb53a497cbbff14a660855604~mv2.jpg", "264108_53338268c51246cd8f19077ee41b6898~mv2.jpg",
    ].map(localImage),
  },
  {
    slug: "technology-ict",
    title: "Technology & ICT",
    description:
      "Students develop digital literacy and programming skills in our computer labs and ICT programs.",
    image: localImage("264108_b5d0a5e4307744e6a00c19514381744b~mv2.jpg"),
    gallery: [
      "264108_b5d0a5e4307744e6a00c19514381744b~mv2.jpg", "264108_b7c53da797084517976e5a467d1a746c~mv2.jpg", "264108_d9cc79c78d4a4fd08ff57db1d9e5e885~mv2.jpg", "264108_1af8315fdcc44e6eb000c0873d2888ee~mv2.jpg", "264108_39e16ae959a447bb80e85321da4900da~mv2.jpg", "264108_0360875f94104e9285e17e5d8191719e~mv2.jpg", "264108_4cb71491112c4f7297b4ace5a0635d33~mv2.jpg", "264108_fba8b5762c9c4719aa333f9687d4ab57~mv2.jpg",
    ].map(localImage),
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const HISTORY_TIMELINE: TimelineItem[] = [
  {
    year: "2015",
    title: "School Construction",
    description:
      "The Liberian Coca-Cola Bottling Company constructed ABCMSTS as part of its corporate social responsibility initiative.",
  },
  {
    year: "2015",
    title: "Land Donation",
    description:
      "The land for the school was generously donated by Hon. Leticia Reeves, former Mayor of the Paynesville City Corporation.",
  },
  {
    year: "2015",
    title: "Du-Port Road Community",
    description:
      "The school was established in the Du-Port Road Community in Paynesville, serving the educational needs of the surrounding area.",
  },
  {
    year: "2015–Present",
    title: "Growing Excellence",
    description:
      "Since opening, ABCMSTS has grown into a model institution for science and technology education in Liberia.",
  },
];

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: "Visit Our School",
    description:
      "Prospective families are invited to visit and meet with our Admissions Officer. Tour our facilities, peek into our classrooms, and meet our teachers.",
  },
  {
    step: 2,
    title: "Apply for Admission",
    description:
      "The admission process occurs once a year and includes entrance exams in both English and Math. Upon passing the exams, students must undergo an interview.",
  },
  {
    step: 3,
    title: "Submit Required Documents",
    description:
      "Successful applicants must submit a report card and transcript from their previously attended school, and a valid health certificate.",
  },
  {
    step: 4,
    title: "Attend Orientation",
    description:
      "Attendance at the orientation for new students is mandatory for both parents and students, as scheduled.",
  },
  {
    step: 5,
    title: "Registration",
    description:
      "Upon notification of acceptance and submission of all required documents, parents or guardians must obtain a bank slip and deposit the registration and Semester 1 fees at the designated bank.",
  },
];

export interface AdmissionInfo {
  label: string;
  value: string;
}

export const ADMISSION_INFO: AdmissionInfo[] = [
  {
    label: "Grades Available",
    value: "Grades 7 through 10",
  },
  {
    label: "Grades 11 & 12",
    value: "Only considered under extenuating circumstances",
  },
  {
    label: "Entrance Exams",
    value: "English and Mathematics",
  },
  {
    label: "Required Documents",
    value: "Report card, transcript, and valid health certificate",
  },
  {
    label: "Orientation",
    value: "Mandatory for both parents and students",
  },
];

export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Students", path: "/students" },
  { label: "Admissions", path: "/admissions" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];

export const HERO_IMAGE = localImage("264108_52efed543d584b71b3d59ef17424bcf1~mv2.jpg");

export const ABOUT_IMAGE = localImage("264108_09323084fc314b1ba11e42e4e3674528~mv2.jpg");

export const STUDENT_LIFE_IMAGE = localImage("264108_b253b85301ee4989be499aa5922a4cca~mv2.jpg");

export const ACADEMICS_IMAGE = localImage("264108_52efed543d584b71b3d59ef17424bcf1~mv2.jpg");

export const SENIOR_HIGH_IMAGE = localImage("264108_4f7061c183f7439d95a54c827893bb03~mv2.jpg");

export const CAMPUS_IMAGE = localImage("264108_09323084fc314b1ba11e42e4e3674528~mv2.jpg");

export const GRADUATION_IMAGE = localImage("264108_7e6412e165ca438098013b760eb28d7f~mv2.jpg");

export const SCIENCE_LAB_IMAGE = localImage("264108_52efed543d584b71b3d59ef17424bcf1~mv2.jpg");

export const LIBRARY_IMAGE = localImage("264108_4f7061c183f7439d95a54c827893bb03~mv2.jpg");

export const COMPUTER_LAB_IMAGE = localImage("264108_a791f3d2ab164737bdcc3da33dbfce9d~mv2.jpg");

export const ADMISSIONS_IMAGE = localImage("264108_a791f3d2ab164737bdcc3da33dbfce9d~mv2.jpg");

export const CONTACT_IMAGE = localImage("264108_fa65bcf7a56849c0aa6ed4c98b81aecb~mv2.jpg");

export const TESTIMONIAL_IMAGE = localImage("264108_40070ec9f3014a99878f682025e700c2~mv2.jpg");

export const GRADUATES_IMAGE = localImage("264108_7e6412e165ca438098013b760eb28d7f~mv2.jpg");

export const GALLERY_IMAGES = [
  "264108_9feaaa3173074584ba15794b431346be~mv2.jpg",
  "264108_52d94ce4aae047c298012c06cf1dc43d~mv2.jpg",
  "264108_e8921fc4f57c44078fbf3a6a52e03dcc~mv2.jpg",
  "264108_0e302c90cc604776a14085bd69b77eab~mv2.jpg",
  "264108_186dae2a3a784ecab4b96b7c1f0b9b45~mv2.jpg",
  "264108_6d080161323d43be95de5e085d3ec873~mv2.jpg",
  "264108_b25d8aa76bf7420882fcd5ac087fa982~mv2.jpg",
  "264108_4141276c1a774162addef58105bbb0ce~mv2.jpg",
  "264108_0d0789839b15437e87634c7d3ac12991~mv2.jpg",
  "264108_ed24f2a383c54079bd29740b703e0514~mv2.jpg",
  "264108_db7109a00e974f4dbe5d7411b2d48774~mv2.jpg",
  "264108_f2677beaef3f476c95ae656c58021130~mv2.jpg",
  "264108_b5d0a5e4307744e6a00c19514381744b~mv2.jpg",
  "264108_b7c53da797084517976e5a467d1a746c~mv2.jpg",
  "264108_d9cc79c78d4a4fd08ff57db1d9e5e885~mv2.jpg",
  "264108_7e6412e165ca438098013b760eb28d7f~mv2.jpg",
].map(localImage);
