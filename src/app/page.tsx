import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Textarea } from '@/components/Teatarea'
import Image from 'next/image'

export default function Home() {
  return (
      <div className="h-screen flex justify-center items-center">
        <form className="w-full max-w-md flex flex-col gap-4">
          <h1 className='text-center text-xl font-bold'>Create App</h1>
          <Input name="name" placeholder='App Name'></Input>
          <Textarea name="description" placeholder='Discription'></Textarea>
          <Button type="submit">Submit</Button>
        </form>
      </div>
  )
}
