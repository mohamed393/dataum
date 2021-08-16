const tasks = [
  {
    id: 1,
    eventName: 'Work',
    dueDate: new Date(),
    tasks: [{
      taskName: 'Meeting With Client',
      startDate: new Date(),
      endDate: new Date(),
      priority: 'high'
    },
      {
        taskName: 'Update Database',
        startDate: new Date(),
        endDate: new Date(),
        priority: 'low'
      }]

  },
  {
    id: 2,
    eventName: 'Personal',
    dueDate: new Date(),
    tasks: [{
      taskName: 'Dr AppointMent',
      startDate: new Date(),
      endDate: new Date(),
      priority: 'high'
    },
      {
        taskName: 'Groceries',
        startDate: new Date(),
        endDate: new Date(),
        priority: 'low'
      },
      {
        taskName: 'Fitness',
        startDate: new Date(),
        endDate: new Date(),
        priority: 'low'
      }]

  },
  {
    id: 3,
    eventName: 'Family',
    dueDate: new Date(),
    tasks: [{
      taskName: 'Family Video Call',
      startDate: new Date(),
      endDate: new Date(),
      priority: 'high'
    }]

  },
];

export {tasks};
