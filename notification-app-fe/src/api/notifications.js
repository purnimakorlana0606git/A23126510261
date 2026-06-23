

export async function fetchNotifications() {
  try {
    const response = await fetch("http://4.224.186.213/evaluation-service/notifications");

    if (!response.ok) {
      throw new Error("Failed to fetch notifications");
    }

    const data = await response.json();

    const top10Notifications = (data.notifications || [])
      .sort(
        (a, b) =>
          new Date(b.Timestamp) - new Date(a.Timestamp)
      )
      .slice(0, 10);

    console.log(
      "TOP 10 ONLY:",
      top10Notifications.length
    );

    return {
      notifications: top10Notifications,
      total: top10Notifications.length,
    };
  } catch (error) {
    console.error(error);

    return {
      notifications: [],
      total: 0,
    };
  }
}
