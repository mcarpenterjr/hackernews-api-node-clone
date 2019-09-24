const { prisma } = require('./generated/prisma-client')

async function main() {
  // New Link
  const newLink = await prisma.createLink({
    url: 'www.prisma.io',
    description: 'Prisma replaces Traditional ORMs',
  })
  console.log(`Created new Link: ${newLink.url} (ID: ${newLink.id})`)

  // Read all links from the database and print to the console
  const allLinks = prisma.links()
  console.log(allLinks)
}

main().catch(e => console.error(e))