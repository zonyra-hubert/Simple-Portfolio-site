import { LinearProgress, Typography, Box } from "@mui/material";

const skills = [
  { name: "HTML/CSS", value: 90 },
  { name: "React", value: 80 },
  { name: "Next.Js", value: 80 },
  { name: "TypeScript", value: 70 },

  { name: "REST/RESTful APIs", value: 80 },
  { name: "Git", value: 90 },
];

export default function SkillBars() {
  return (
    <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4}>
      {skills.map((skill) => (
        <Box key={skill.name}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="white">
              {skill.name}
            </Typography>
            <Typography variant="body2" color="white">
              {skill.value}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={skill.value}
            sx={{
              height: 6,
              borderRadius: 5,
              backgroundColor: "#1a1a1a",
              "& .MuiLinearProgress-bar": {
                backgroundColor:
                  skill.value >= 90
                    ? "green"
                    : skill.value >= 70
                    ? "gold"
                    : "crimson",
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
