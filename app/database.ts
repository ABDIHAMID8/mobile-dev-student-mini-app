// 1. Define the structure of a student profile using a TypeScript interface
export interface StudentProfile {
  id: string;
  name: string;
  regNo: string;
  course: string;
  yearOfStudy: string;
  campus: string;
}

// 2. Create a clean mock student record to use across our app screens
export const mockStudent: StudentProfile = {
  id: "1",
  name: "hamkidy",
  regNo: "BIT/2025/00000",
  course: "Bachelor of Science in Information Technology",
  yearOfStudy: "Year 4, Semester 1",
  campus: "Main Campus",
};
