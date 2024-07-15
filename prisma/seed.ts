import { prisma } from '../src/lib/prisma'


async function seed(){
  await prisma.event.create({
    data: {
     id: 'd660acf0-0c7d-490d-a58f-14a0429a3e08',
     title: 'Unite Summit',
     slug: 'unite-summit',
     details: 'Um evento p/ devs apaixonados por código!', 
     maximumAttendees: 120
    }
  })

}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})