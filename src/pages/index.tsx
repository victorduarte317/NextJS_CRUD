import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-900 to to-blue-400
      text-white
    `}>
      <Layout title='Registration'>
        <span>Content</span>
      </Layout>
    </div>
  )
}
