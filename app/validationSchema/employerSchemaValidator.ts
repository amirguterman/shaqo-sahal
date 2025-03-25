import z from "zod";

const validateInvestor = z.object({
  fundName: z.string().min(4, "Fund name must be at least 4 characters"),
  location: z.string().min(4, "Headquarters location required"),
  logo: z.string().optional(),
  investmentFocus: z.array(z.string()).min(1, "Select at least one focus area"),
  website: z.string().url().optional(),
});

export default validateInvestor;
