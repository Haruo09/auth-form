import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex justify-center align-center h-[100vh]">
      <Card className='w-full max-w-xs h-fit m-auto'>
        <form action="">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>
          <CardContent>
              <Label htmlFor='name'>Email: </Label>
              <Input name="email" id="email" type="email" />
              <Label htmlFor='password'>Password: </Label>
              <Input name="password" id="password" type="password" />

          </CardContent>
          <CardFooter className='flex justify-between gap-2'>
            <Button type='submit' variant="default" className='w-full'>Submit</Button>
            <Button type='reset' variant="outline" className='w-full'>Cancel</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
