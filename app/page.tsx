"use client"
import { CssVarsProvider, FormControl, Typography, FormLabel, Sheet, Input, Button, Link} from "@mui/joy"

export default function App() {
  return (
    <CssVarsProvider>
      <Sheet
      sx={{
        width:300,
        mx: 'auto',
        my: 5,
        px: 3,
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'md',
        boxShadow: 'md'
      }}
      variant='outlined'>
        <div>
          <Typography level="h3" component="h1">Welcome!</Typography>
          <Typography level="body-sm">Sing in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
          name='email'
          type='email'
          placeholder="Enter your email."
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
          name='password'
          type='password'
          placeholder="Enter your password."
          ></Input>
        </FormControl>
        <Button sx={{mt:1}}>
          Log in
        </Button>
        <Typography
        endDecorator={<Link href="/sign-up">Sign up</Link>}
        fontSize="sm"
        sx={{alignSelf: 'center'}}>
          Don&apos;t have an account?
        </Typography>
      </Sheet>

    </CssVarsProvider>
  )
}