import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import { sql } from '@vercel/postgres'

export async function POST(request) {
  try {
    const { email, password, password2 } = await request.json()
    // VALIDATE EMAIL AND PASSWORD
    console.log({ email, password, password2 })

    const hashedPass = await hash(password, 10)
    const hashedPass2 = await hash(password2, 10)

    const response = await sql`
    INSERT INTO users (email, password, password2)
    VALUE (${email}, ${hashedPass}, ${hashedPass2})
    `
  } catch (e) {
    console.log({ e })
  }

  return NextResponse.json({ message: 'Registration Successfull!' })
}
