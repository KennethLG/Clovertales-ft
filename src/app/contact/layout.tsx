export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-5xl">Contact</h1>
      <p className="mt-10 max-w-2xl text-center">
        We&apos;d love to hear from you! Whether you have questions, comments,
        or just want to say hello, we&apos;re here to help. We value your
        feedback and are always eager to connect with our players and fans. You
        can reach out to us at clovertales@contact.com. We do our best to
        respond to all inquiries in a timely manner, but please allow us a few
        days to get back to you. So don&apos;t be shy, drop us a line and let us
        know what you think about our parallel universe adventure game.
        We&apos;re always happy to hear from you!
      </p>
      {children}
    </section>
  );
}
