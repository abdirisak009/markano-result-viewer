
export interface StudentScore {
  "ASSIGN-1": number;
  "ASSIGN-2": number;
  "TOTAL": number;
}

export const studentScores: Record<string, StudentScore> = {
  "134606": { "ASSIGN-1": 15, "ASSIGN-2": 18, "TOTAL": 33 },
  "134420": { "ASSIGN-1": 13, "ASSIGN-2": 17, "TOTAL": 30 },
  "134402": { "ASSIGN-1": 13, "ASSIGN-2": 17, "TOTAL": 30 },
  "133574": { "ASSIGN-1": 13, "ASSIGN-2": 17, "TOTAL": 30 },
  "134325": { "ASSIGN-1": 13, "ASSIGN-2": 17, "TOTAL": 30 },
  "134513": { "ASSIGN-1": 13, "ASSIGN-2": 17, "TOTAL": 30 },
  "134247": { "ASSIGN-1": 15, "ASSIGN-2": 10, "TOTAL": 25 },
  "134251": { "ASSIGN-1": 13, "ASSIGN-2": 10, "TOTAL": 23 },
  "134249": { "ASSIGN-1": 13, "ASSIGN-2": 10, "TOTAL": 23 },
  "134273": { "ASSIGN-1": 13, "ASSIGN-2": 10, "TOTAL": 23 },
  "134811": { "ASSIGN-1": 13, "ASSIGN-2": 10, "TOTAL": 23 },
  "134374": { "ASSIGN-1": 15, "ASSIGN-2": 18, "TOTAL": 33 },
  "134567": { "ASSIGN-1": 13, "ASSIGN-2": 17, "TOTAL": 30 },
  "134471": { "ASSIGN-1": 13, "ASSIGN-2": 17, "TOTAL": 30 },
  "134535": { "ASSIGN-1": 13, "ASSIGN-2": 17, "TOTAL": 30 },
  "134424": { "ASSIGN-1": 13, "ASSIGN-2": 17, "TOTAL": 30 },
  "134776": { "ASSIGN-1": 13, "ASSIGN-2": 17, "TOTAL": 30 },
  "134784": { "ASSIGN-1": 15, "ASSIGN-2": 10, "TOTAL": 25 },
  "134556": { "ASSIGN-1": 13, "ASSIGN-2": 10, "TOTAL": 23 },
  "134396": { "ASSIGN-1": 13, "ASSIGN-2": 10, "TOTAL": 23 },
  "134795": { "ASSIGN-1": 13, "ASSIGN-2": 10, "TOTAL": 23 },
  "134493": { "ASSIGN-1": 13, "ASSIGN-2": 8,  "TOTAL": 21 },
  "134655": { "ASSIGN-1": 13, "ASSIGN-2": 8,  "TOTAL": 21 },
  "134663": { "ASSIGN-1": 9,  "ASSIGN-2": 12, "TOTAL": 21 },
  "134486": { "ASSIGN-1": 9,  "ASSIGN-2": 12, "TOTAL": 21 },
  "134427": { "ASSIGN-1": 9,  "ASSIGN-2": 12, "TOTAL": 21 },
  "134283": { "ASSIGN-1": 9,  "ASSIGN-2": 12, "TOTAL": 21 },
  "134755": { "ASSIGN-1": 9,  "ASSIGN-2": 12, "TOTAL": 21 },
  "134376": { "ASSIGN-1": 9,  "ASSIGN-2": 12, "TOTAL": 21 },
  "134658": { "ASSIGN-1": 9,  "ASSIGN-2": 12, "TOTAL": 21 },
  "134623": { "ASSIGN-1": 12, "ASSIGN-2": 12, "TOTAL": 24 },
  "131707": { "ASSIGN-1": 11, "ASSIGN-2": 12, "TOTAL": 23 }
};

export const getStudentScore = (studentId: string): StudentScore | null => {
  return studentScores[studentId] || null;
};
