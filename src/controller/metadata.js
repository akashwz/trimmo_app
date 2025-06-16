export function getPageMetadata({ title, description }) {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        siteName: 'Trimmo Bio',
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      }
    };
  }
  