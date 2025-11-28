"use client"

import { FormControl, FormLabel, Input, Sheet, Typography, Button, Link } from "@mui/joy"

export default function App() {
  return(
    <Sheet
    sx={{
      width: 300,
      mx: 'auto',
      my: 3,
      px: 2,
      py: 4,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      borderRadius: 'md',
      boxShadow: 'md'
    }}
    variant="outlined">
      <div>
        <Typography level="h3">Welcome!</Typography>
        <Typography level="body-sm">Sign in to continue.</Typography>
      </div>
      <FormControl sx={{mt:1}}>
        <FormLabel>Email</FormLabel>
        <Input
        name="email"
        type="email"
        placeholder="enter your email"
        ></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
        name="password"
        type="password"
        placeholder="enter your password"></Input>
      </FormControl>
      <Button sx={{mt:1}}>Login</Button>
      <Typography
      endDecorator={<Link href="/sign-up">Sign up</Link>}
      level="body-sm"
      sx={{alignSelf:'center'}}>
        Don&apos;t have an account?
      </Typography>
      


    </Sheet>
  )
}