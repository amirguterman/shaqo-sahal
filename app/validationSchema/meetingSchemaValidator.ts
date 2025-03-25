import { z } from "zod";

const meetingValidator = z.object({
  meetingType: z.string().min(2, "Meeting type required"),
  agenda: z.string().min(10, "Detailed agenda required"),
  duration: z.number().min(15, "Minimum 15 minutes"),
  meetingDate: z.date(),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
});
export default meetingValidator;
