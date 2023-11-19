import { sql } from '@vercel/postgres'   // sql connects every time
//import { db } from '@vercel/postgres'  // db does one connect then queries
//const client = await db.connect()      // it's recommended to use db instead of sql
//await client.sql`SELECT ...`

type Dictionary = { [key:string]:any }

export async function getUsers() {
  const { rows } = await sql`SELECT * from users`
  return rows
}

export async function getUserById(id:string) {
  const { rows } = await sql`SELECT * from users where id=${id}`
  return rows.length > 0 ? rows[0] : null
}

export async function getDreams() {
  const { rows } = await sql`SELECT * from dreams`
  return rows
}

export async function getDreamById(id:string) {
  const { rows } = await sql`SELECT * from dreams where id=${id}`
  return rows.length > 0 ? rows[0] : null
}

export async function getDreamByContract(id:string) {
  const { rows } = await sql`SELECT * from dreams where contract=${id}`
  return rows.length > 0 ? rows[0] : null
}

export async function getDreamsByOwner(id:string) {
  const { rows } = await sql`SELECT * from dreams where owner=${id}`
  return rows
}

export async function getDreamsByCountry(id:string) {
  const { rows } = await sql`SELECT * from dreams where country=${id}`
  return rows
}

export async function newDream(data:Dictionary) {
  console.log('DATA', data)
  try {
    const res = await sql`INSERT INTO dreams(
      owner, 
      contract, 
      name, 
      descrip, 
      goal, 
      funds, 
      country,
      image
    ) VALUES (
      ${data?.owner},
      ${data?.contract},
      ${data?.name},
      ${data?.descrip},
      ${data?.goal || 0},
      ${data?.funds || 0},
      ${data?.country},
      ${data?.image}
    )`
    console.log('RES', res)
    return res
  } catch(ex:any) {
    console.error(ex)
    return {error: ex?.message}
  }
}

export async function deleteDream(id:string) {
  const res = await sql`DELETE from dreams where id=${id}`
  console.log('RES', res)
  return res
}

