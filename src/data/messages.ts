export interface Message {
  calendar: string;
  title?: string;
  description: string;
  date: string;
  id: number;
}

const messages: Message[] = [
  {
    calendar: 'Internal',
    title: 'A Good Start to the Day',
    description: 'This is a group specifically meant for people to spend a minute or two thinking and talking about their plan for the day ahead. It will help people be intentional about their day so that they are more likely to have a good one! (You do not need a plan before you show up, but expect only to talk briefly, as this is a brief check-in group to get everyone in the right mindset rather than a long discussion group!) Contact Andrew Meissen at andrewmeissen@gmail.com',
    date: 'Tue, October 12, 8:45am – 9:00am',
    id: 0
  },
  {
    calendar: 'Internal',
    title: 'Coffee Hour!',
    description: 'Join Megan to enjoy some chat and coffee in the morning to start your day!',
    date: 'Tue, October 12, 9:00am – 9:30am',
    id: 1
  },
  {
    calendar: 'Technology',
    title: 'H&G Unit Meeting',
    description: `
    Join our hybrid unit meetings at 9:30am to see what your unit is up to help us out from home! 

    Join Zoom Meeting
    https://us02web.zoom.us/j/82468465171?pwd=NFdPMytOZ1U4dmpCTVJjRkxraGsvUT09
    `,
    date: 'Tue, October 12, 9:30am – 10:30am',
    id: 2

  },
  {
    calendar: 'Internal',
    title: 'Silver Center Unit Meeting',
    description: `
    Join the Silver Center for their daily unit meeting.

    Join Zoom Meeting
    https://us02web.zoom.us/j/8932229541?pwd=aTMrYmpzd2M2MElJQTJRMGNDRWsvZz09
    `,
    date: 'Tue, October 12, 9:30am – 10:00am',
    id: 3
  },
  {
    calendar: 'Technology',
    title: 'Communications Unit Morning Meeting',
    description: `
Join us for our daily Communications Unit meeting.  We will have updates and announcements about the clubhouse and events.  Along with that you can sign up to work on various unit projects, or you can just drop in to check in with the community.

 Join Zoom Meeting
https://zoom.us/j/8274335325?pwd=R01JOVJIeXVtY2Z1eG93ZEVjaWpFUT09
    `,
    date: 'Tue, October 12, 9:30am – 10:00am',
    id: 4
  },
  {
    calendar: 'Technology',
    title: 'Research Unit Morning Meeting',
    description: `
    Come and plan the work of the day with the Research Unit!

    https://zoom.us/j/95097129711
    `,
    date: 'Tue, October 12, 9:30am – 10:00am',
    id: 5
  },
  {
    calendar: 'Technology',
    title: 'Communications Zoom Unit',
    description: `
    Join us to check in with the community, or to work on various projects.  Such as FH Publications (Fountain House Times, The Fountain Pen, and FH Blog), Fountain Daily Scheduling, Photo Archives, Reachout, Creative Projects, or to connect with Unit Members or your Social Practitioner .  

    Join Zoom Meeting
    https://zoom.us/j/8274335325?pwd=R01JOVJIeXVtY2Z1eG93ZEVjaWpFUT09
    `,
    date: 'Tue, October 12, 10am – 12pm',
    id: 6
  },
  {
    calendar: 'Internal',
    title: 'Flower Arrranging',
    description: 'In person event',
    date: 'Tue, October 12, 10:30am – 11:30am',
    id: 7
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);