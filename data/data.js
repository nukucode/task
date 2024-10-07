import Avatar1 from "../public/img/avatar/1.png";
import Avatar2 from "../public/img/avatar/2.png";
import Avatar3 from "../public/img/avatar/3.png";
import Avatar4 from "../public/img/avatar/4.png";
import Avatar5 from "../public/img/avatar/5.png";
import Avatar6 from "../public/img/avatar/6.png";
import Avatar7 from "../public/img/avatar/7.png";

export const data = [
  {
    id: "1",
    title: "today",
    icon: "📆",
    taskCount: 4,
    tasks: [
      {
        _id: "1",
        title:
          "Finish the sales presentation for the client meeting at 2:00 PM",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: false,
        assign: [
          {
            id: "1",
            name: "John Doe",
            avatar: Avatar1
          },

          {
            id: "2",
            name: "Alya Smith",
            avatar: Avatar2
          }
        ]
      },

      {
        _id: "2",
        title: "Send follow-up emails to potential leads",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: false
      },

      {
        _id: "3",
        title: "Review and approve the marketing budget for Q4",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: true,
        assign: [
          {
            id: "1",
            name: "Kira Knose",
            avatar: Avatar3
          },

          {
            id: "2",
            name: "Utahime Gojo",
            avatar: Avatar4
          },

          {
            id: "3",
            name: "Nobara Kasube",
            avatar: Avatar5
          },

          {
            id: "4",
            name: "Megumi Fushiguro",
            avatar: Avatar6
          }
        ]
      },

      {
        _id: "4",
        title: "Attend the teammeeting at 10:30 AM",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: true
      }
    ]
  },
  {
    id: "2",
    title: "personal",
    icon: "👤",
    taskCount: 3,
    tasks: [
      {
        _id: "1",
        title: "Do 30 minutes of physical exercise",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: false
      },

      {
        _id: "2",
        title: "Read one chapter of the book you want to finish",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: false,
        assign: [
          {
            id: "1",
            name: "Romeyo Sakuna",
            avatar: Avatar7
          },

          {
            id: "2",
            name: "Mahito ",
            avatar: Avatar4
          },

          {
            id: "3",
            name: "Kenjaku",
            avatar: Avatar6
          }
        ]
      },

      {
        _id: "3",
        title: "Pay the eteetricity bill and ether bill",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: true,
        assign: [
          {
            id: "1",
            name: "Maki",
            avatar: Avatar3
          },

          {
            id: "2",
            name: "Yuta Okatsu",
            avatar: Avatar6
          }
        ]
      },

      {
        _id: "4",
        title: "Take 10 minutes for meditation or deep breathing",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: false
      }
    ]
  },
  {
    id: "3",
    title: "work",
    icon: "💼",
    taskCount: 5,
    tasks: [
      {
        _id: "1",
        title: "Complete Monthly Report",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: true
      },

      {
        _id: "2",
        title: "Send subcribe-up emails to potential leads",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: false
      },

      {
        id: "3",
        title: "Review and approve the marketing budget for Q3",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: true
      },

      {
        id: "4",
        title: "Attend the teammeeting at 12:30 AM",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: false
      }
    ]
  },
  {
    id: "4",
    title: "completed",
    icon: "✅",
    taskCount: 3,
    tasks: [
      {
        _id: 1,
        title:
          "Finish the sales presentation for the client meeting at 2:00 PM",
        note: "",
        dueDate: "2024-09-27",
        isCompleted: true
      }
    ]
  }
];

export const memberData = [
  {
    id: "1",
    name: "Gojo Saturo",
    email: "saturo@gmail.com",
    occupation: "Owner",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5ff9cd-a751-4cd4-b9c5-00aa21620b7b/deu3q3u-6f1ca041-b5b7-46d7-ab06-f8547a7114cc.jpg/v1/fill/w_748,h_734,q_75,strp/cool_pfp_for_anyone__by_snowierev_deu3q3u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM0IiwicGF0aCI6IlwvZlwvNWU1ZmY5Y2QtYTc1MS00Y2Q0LWI5YzUtMDBhYTIxNjIwYjdiXC9kZXUzcTN1LTZmMWNhMDQxLWI1YjctNDZkNy1hYjA2LWY4NTQ3YTcxMTRjYy5qcGciLCJ3aWR0aCI6Ijw9NzQ4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.bIIhpuZAj8GkKnWaCQ-QqVf-q58InCQZthNWr5mno7w"
  },

  {
    id: "2",
    name: "Bro Takakae",
    email: "brotaka@gmail.com",
    occupation: "Editor",
    img: "https://avatarfiles.alphacoders.com/337/thumb-1920-337251.jpg"
  },

  {
    id: "3",
    name: "Trinity",
    email: "trinity@gmail.com",
    occupation: "Designer",
    img: "https://yt3.ggpht.com/-_nSBoxyC3kF06ISXM2ZyEEh22BraLOryQY6r1uGyHohJb5foLwEyo2Dh_V2Va6Eyr_rUWOZqKpC_g=s234-c-fcrop64=1,00000227fffffdd8-nd-v1"
  }
];

export const colors = [
  "#3498db",
  "#bb8fce",
  "#a3e4d7",
  "#5dade2",
  "#52be80",
  "#1abc9c",
  "#82e0aa"
];
