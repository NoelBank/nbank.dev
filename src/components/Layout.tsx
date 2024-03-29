export default function Layout({
  title = '',
  description = '',
  children = [],
}) {
  return (
    <>
      {`<!DOCTYPE html>`}
      <html lang='de'>
        <head>
          <base href={`/`} />
          <meta charset='utf-8' />
          <meta name='description' content={description} />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            rel='stylesheet'
            href={`/index.css?${process.env.BUILD_TIME}`}
          />
          <script src={`/index.js?${process.env.BUILD_TIME}`} />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
          <title>{title}</title>
        </head>
        <body class='layout'>{children}</body>
      </html>
    </>
  );
}
