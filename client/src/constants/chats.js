const chats = [
  {
    name: "Sarah Johnson",
    avatar_url: "https://randomuser.me/api/portraits/women/1.jpg",
    last_message: "Sounds great! See you there.",
    last_message_at: "2023-07-21 15:34:22",
  },
  {
    name: "Mark Williams",
    avatar_url: "https://randomuser.me/api/portraits/men/2.jpg",
    last_message: "Sure thing! Let's do it.",
    last_message_at: "2023-07-21 12:45:10",
  },
  {
    name: "Emily Chen",
    avatar_url: "https://randomuser.me/api/portraits/women/3.jpg",
    last_message: "Haha, that was hilarious!",
    last_message_at: "2023-07-20 18:12:55",
  },
  {
    name: "Alex Brown",
    avatar_url: "https://randomuser.me/api/portraits/men/4.jpg",
    last_message: "I'll be there in 10 minutes.",
    last_message_at: "2023-07-20 10:20:30",
  },
  {
    name: "Michael Lee",
    avatar_url: "https://randomuser.me/api/portraits/men/5.jpg",
    last_message: "Thanks for the info, appreciate it!",
    last_message_at: "2023-07-19 21:05:13",
  },
  {
    name: "Emma Martinez",
    avatar_url: "https://randomuser.me/api/portraits/women/6.jpg",
    last_message: "Can't wait to see you!",
    last_message_at: "2023-07-19 08:50:17",
  },
  {
    name: "Christopher Kim",
    avatar_url: "https://randomuser.me/api/portraits/men/7.jpg",
    last_message: "Let's meet up for lunch.",
    last_message_at: "2023-07-18 16:30:40",
  },
  {
    name: "Olivia Clark",
    avatar_url: "https://randomuser.me/api/portraits/women/8.jpg",
    last_message: "Congratulations on your promotion!",
    last_message_at: "2023-07-17 14:22:08",
  },
  {
    name: "Ethan Nguyen",
    avatar_url: "https://randomuser.me/api/portraits/men/9.jpg",
    last_message: "I'll be there by 7 PM.",
    last_message_at: "2023-07-16 19:55:30",
  },
  {
    name: "Isabella Rivera",
    avatar_url: "https://randomuser.me/api/portraits/women/10.jpg",
    last_message: "Can you send me the document?",
    last_message_at: "2023-07-15 11:10:22",
  },
  {
    name: "Liam Mitchell",
    avatar_url: "https://randomuser.me/api/portraits/men/11.jpg",
    last_message: "Let's reschedule the meeting.",
    last_message_at: "2023-07-14 09:15:18",
  },
  {
    name: "Ava Patel",
    avatar_url: "https://randomuser.me/api/portraits/women/12.jpg",
    last_message: "Looking forward to the party!",
    last_message_at: "2023-07-13 20:48:35",
  },
  {
    name: "Noah Stewart",
    avatar_url: "https://randomuser.me/api/portraits/men/13.jpg",
    last_message: "I'll call you later.",
    last_message_at: "2023-07-12 12:40:29",
  },
  {
    name: "Sophia Gonzalez",
    avatar_url: "https://randomuser.me/api/portraits/women/14.jpg",
    last_message: "Thanks for the birthday wishes!",
    last_message_at: "2023-07-11 17:05:14",
  },
  {
    name: "Jackson Murphy",
    avatar_url: "https://randomuser.me/api/portraits/men/15.jpg",
    last_message: "See you at the cinema tonight.",
    last_message_at: "2023-07-10 14:18:09",
  },
];

const friendsList = [
  {
    name: "Sarah Johnson",
    avatar_url: "https://randomuser.me/api/portraits/women/1.jpg",
    about: "This is about me",
  },
  {
    name: "Mark Williams",
    avatar_url: "https://randomuser.me/api/portraits/men/2.jpg",
    about: "This is about me",
  },
  {
    name: "Emily Chen",
    avatar_url: "https://randomuser.me/api/portraits/women/3.jpg",
    about: "This is about me",
  },
  {
    name: "Alex Brown",
    avatar_url: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "This is about me",
  },
  {
    name: "Michael Lee",
    avatar_url: "https://randomuser.me/api/portraits/men/5.jpg",
    about: "This is about me",
  },
  {
    name: "Emma Martinez",
    avatar_url: "https://randomuser.me/api/portraits/women/6.jpg",
    about: "This is about me",
  },
  {
    name: "Christopher Kim",
    avatar_url: "https://randomuser.me/api/portraits/men/7.jpg",
    about: "This is about me",
  },
  {
    name: "Olivia Clark",
    avatar_url: "https://randomuser.me/api/portraits/women/8.jpg",
    about: "This is about me",
  },
  {
    name: "Ethan Nguyen",
    avatar_url: "https://randomuser.me/api/portraits/men/9.jpg",
    about: "This is about me",
  },
  {
    name: "Isabella Rivera",
    avatar_url: "https://randomuser.me/api/portraits/women/10.jpg",
    about: "This is about me",
  },
  {
    name: "Liam Mitchell",
    avatar_url: "https://randomuser.me/api/portraits/men/11.jpg",
    about: "This is about me",
  },
  {
    name: "Ava Patel",
    avatar_url: "https://randomuser.me/api/portraits/women/12.jpg",
    about: "This is about me",
  },
  {
    name: "Noah Stewart",
    avatar_url: "https://randomuser.me/api/portraits/men/13.jpg",
    about: "This is about me",
  },
  {
    name: "Sophia Gonzalez",
    avatar_url: "https://randomuser.me/api/portraits/women/14.jpg",
    about: "This is about me",
  },
  {
    name: "Jackson Murphy",
    avatar_url: "https://randomuser.me/api/portraits/men/15.jpg",
    about: "This is about me",
  },
];

const favourites = [];

export { chats, friendsList, favourites };
