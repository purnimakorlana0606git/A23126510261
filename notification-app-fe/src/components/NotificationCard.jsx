
import { Card, CardContent, Typography } from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {notification.title || notification.message}
        </Typography>

        <Typography variant="body2">
          {notification.body || notification.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
