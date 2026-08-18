/* @ds-bundle: {"format":3,"namespace":"SawdustDesignSystem_aaf5b3","components":[],"sourceHashes":{"sections.jsx":"7b92d347f5ab","ui_kits/marketing/app.jsx":"e9a6a1666549","ui_kits/marketing/sections.jsx":"a24025bcfe14","ui_kits/web_app/AppBar.jsx":"19843dc21655","ui_kits/web_app/SendSheet.jsx":"b6ee61abb311","ui_kits/web_app/app.jsx":"c9cbd8a89ca7","ui_kits/web_app/cards.jsx":"51347ef0842b","ui_kits/web_app/data.js":"10fbd104aa27","ui_kits/web_app/posters.js":"aa14a1dc3d71","ui_kits/web_app/primitives.jsx":"a2f19a8b9fc2","ui_kits/web_app/screens.jsx":"2b0958c8ebf4","ui_kits/web_app/screens2.jsx":"47a72e498f96"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SawdustDesignSystem_aaf5b3 = window.SawdustDesignSystem_aaf5b3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// sections.jsx
try { (() => {
/* Sawdust marketing — sections. Reuses primitives (Poster, Avatar, Stars, Btn, Chip) + SD_DATA. */

function MNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: 'mnav' + (scrolled ? ' scrolled' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap mnav__in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "word"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sawdust-mark.svg",
    height: "27",
    alt: ""
  }), "Sawdust"), /*#__PURE__*/React.createElement("div", {
    className: "mnav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#lists"
  }, "Lists"), /*#__PURE__*/React.createElement("a", {
    href: "#ratings"
  }, "Ratings")), /*#__PURE__*/React.createElement("div", {
    className: "mnav__right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mnav__signin",
    href: "#"
  }, "Sign in"), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "sm"
  }, "Get started"))));
}

/* a poster in the wall with hover caption */
function WallPoster({
  film
}) {
  const f = SD_DATA.films[film];
  return /*#__PURE__*/React.createElement("div", {
    className: "poster-hover"
  }, /*#__PURE__*/React.createElement(Poster, {
    film: film,
    hover: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sd-tag",
    style: {
      background: 'rgba(20,15,10,.72)',
      color: '#F3E8D6'
    }
  }, f.title)));
}
function Wall() {
  const ids = Object.keys(SD_DATA.films);
  // build a mixed sequence: posters + curated cards (the Cosmos "cluster" feel)
  const items = [];
  ids.forEach((id, i) => {
    items.push(/*#__PURE__*/React.createElement(WallPoster, {
      key: id,
      film: id
    }));
    if (i === 2) items.push(/*#__PURE__*/React.createElement("div", {
      key: "q1",
      className: "wcard quote"
    }, "\u201COkay. You were right. The train scene.\u201D", /*#__PURE__*/React.createElement("div", {
      className: "qfoot"
    }, /*#__PURE__*/React.createElement(Avatar, {
      person: "manvi",
      size: 22
    }), "Manvi, on Before Sunrise")));
    if (i === 5) items.push(/*#__PURE__*/React.createElement("div", {
      key: "s1",
      className: "wcard send"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement(Avatar, {
      person: "tisha",
      size: 26
    }), /*#__PURE__*/React.createElement("span", {
      className: "nm"
    }, "Tisha sent you", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-faint)',
        fontWeight: 400
      }
    }, "In the Mood for Love")))));
    if (i === 8) items.push(/*#__PURE__*/React.createElement("div", {
      key: "q2",
      className: "wcard quote",
      style: {
        fontSize: 18
      }
    }, "\u201CDo NOT watch this when you\u2019re already sad.\u201D", /*#__PURE__*/React.createElement("div", {
      className: "qfoot"
    }, /*#__PURE__*/React.createElement(Avatar, {
      person: "rohan",
      size: 22
    }), "Rohan, on Aftersun")));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "wall-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wall"
  }, items)), /*#__PURE__*/React.createElement("div", {
    className: "wall-fade-bot"
  }));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "wrap hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "popcorn",
    size: 15,
    color: "var(--amber-deep)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      color: 'var(--ink-soft)'
    }
  }, "Movies are better when you share them")), /*#__PURE__*/React.createElement("h1", null, "Make your friends watch the films you ", /*#__PURE__*/React.createElement("em", null, "love"), "."), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Sawdust is where you hand a film to a friend, watch it together, and trade honest ratings back. Not a feed. A ritual."), /*#__PURE__*/React.createElement("div", {
    className: "cta",
    "data-comment-anchor": "29d6a61718-div-70-7"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    icon: "send"
  }, "Start sharing taste"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    size: "lg",
    icon: "play"
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    className: "trust"
  }, /*#__PURE__*/React.createElement("span", {
    className: "av"
  }, /*#__PURE__*/React.createElement(Avatar, {
    person: "manvi"
  }), /*#__PURE__*/React.createElement(Avatar, {
    person: "tisha"
  }), /*#__PURE__*/React.createElement(Avatar, {
    person: "rohan"
  })), /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      marginLeft: 12
    }
  }, "join 40,000 people swapping taste")));
}
function Steps() {
  const steps = [{
    n: '01',
    ic: 'send',
    h: 'Recommend it',
    p: 'Hand a film to a friend with a personal note and your own rating. “You have to watch this” — finally with a button.'
  }, {
    n: '02',
    ic: 'popcorn',
    h: 'Watch together',
    p: 'Together on the couch or apart on a Tuesday. Sawdust nudges, plans, and keeps track of who’s seen what.'
  }, {
    n: '03',
    ic: 'star',
    h: 'Rate it back',
    p: 'They rate it — to you, not the void. Your two ratings sit side by side. Agreeing is sweet. Disagreeing is funnier.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec wrap",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "The ritual"), /*#__PURE__*/React.createElement("h2", null, "Three steps. One inside joke that lasts for years.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p)))));
}
function Clusters() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec wrap",
    id: "lists"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Shared lists"), /*#__PURE__*/React.createElement("h2", null, "Keep a running list with everyone you watch with."), /*#__PURE__*/React.createElement("p", null, "A list for your best friend. One for the horror group. One for bad days. They never really end \u2014 that\u2019s the point.")), /*#__PURE__*/React.createElement("div", {
    className: "pills"
  }, ['Me + Manvi', 'Sunday Horror Club', 'Comfort watches', 'Date night', 'Films Rohan owes me'].map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    active: t === 'Me + Manvi'
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "clusters"
  }, SD_DATA.lists.map(l => /*#__PURE__*/React.createElement("div", {
    className: "cluster",
    key: l.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "stk"
  }, l.films.slice(0, 4).map((x, i) => /*#__PURE__*/React.createElement(Poster, {
    key: i,
    film: x.film,
    style: {
      zIndex: 10 - i
    }
  }))), /*#__PURE__*/React.createElement("h3", null, l.title), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, l.sub), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, l.members.map(m => /*#__PURE__*/React.createElement(Avatar, {
    key: m,
    person: m,
    size: 26,
    style: {
      marginRight: -8
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, l.films.length, " films"))))));
}
function Ratings() {
  const rows = [{
    f: 'whiplash',
    you: 5,
    them: 2,
    who: 'manvi'
  }, {
    f: 'sunrise',
    you: 4,
    them: 4.5,
    who: 'manvi'
  }, {
    f: 'cmbyn',
    you: 4.5,
    them: 4,
    who: 'manvi'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec wrap",
    id: "ratings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Legit ratings"), /*#__PURE__*/React.createElement("h2", null, "Honest stars. Side by side."), /*#__PURE__*/React.createElement("p", null, "Five stars, half-steps, no algorithm pretending to know you. Just your rating, your friend\u2019s rating, and the gap between them \u2014 which is usually where the good conversations start."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    icon: "star"
  }, "Rate your first film"))), /*#__PURE__*/React.createElement("div", {
    className: "versus"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "overline"
  }, "You"), /*#__PURE__*/React.createElement("span", {
    className: "overline"
  }, "Manvi")), rows.map((r, i) => {
    const f = SD_DATA.films[r.f];
    return /*#__PURE__*/React.createElement("div", {
      className: "vrow",
      key: i
    }, /*#__PURE__*/React.createElement(Poster, {
      film: r.f,
      style: {
        width: 40,
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14.5
      }
    }, f.title), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, f.year)), /*#__PURE__*/React.createElement(Stars, {
      value: r.you
    }), /*#__PURE__*/React.createElement("span", {
      className: "meta",
      style: {
        color: 'var(--ink-ghost)'
      }
    }, "vs"), /*#__PURE__*/React.createElement(Stars, {
      value: r.them
    }));
  }))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-band",
    "data-theme": "dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap cta-inner"
  }, /*#__PURE__*/React.createElement("h2", null, "Start sharing what you ", /*#__PURE__*/React.createElement("em", null, "love"), "."), /*#__PURE__*/React.createElement("div", {
    className: "email"
  }, /*#__PURE__*/React.createElement("input", {
    className: "sd-input",
    placeholder: "your@email.com"
  }), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary"
  }, "Get started")), /*#__PURE__*/React.createElement("p", {
    className: "meta",
    style: {
      marginTop: 14,
      color: 'var(--ink-faint)'
    }
  }, "free forever \xB7 no ads \xB7 your taste stays yours")));
}
function Footer() {
  const cols = [{
    h: 'Product',
    links: ['How it works', 'Lists', 'Ratings', 'For couples', 'For groups']
  }, {
    h: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press']
  }, {
    h: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "word"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sawdust-mark.svg",
    height: "30",
    alt: ""
  }), "Sawdust"), /*#__PURE__*/React.createElement("p", {
    className: "body-sm",
    style: {
      maxWidth: 260,
      marginTop: 12
    }
  }, "What the film left on you. Shared with the people you watch with.")), /*#__PURE__*/React.createElement("div", {
    className: "foot__cols"
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    className: "foot__col",
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", null, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#"
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    className: "foot__base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Sawdust. Made for people with opinions."), /*#__PURE__*/React.createElement("span", null, "Posters shown are branded placeholders."))));
}
Object.assign(window, {
  MNav,
  Wall,
  Hero,
  Steps,
  Clusters,
  Ratings,
  CTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/app.jsx
try { (() => {
/* Sawdust marketing — app root */
function Landing() {
  useLucide();
  useEffect(() => {
    if (window.loadPosters) window.loadPosters(SD_DATA.films);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MNav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Wall, null), /*#__PURE__*/React.createElement(Steps, null), /*#__PURE__*/React.createElement(Ratings, null), /*#__PURE__*/React.createElement(Clusters, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Landing, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/sections.jsx
try { (() => {
/* Sawdust marketing — sections. Reuses primitives (Poster, Avatar, Stars, Btn, Chip) + SD_DATA. */

function MNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: 'mnav' + (scrolled ? ' scrolled' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap mnav__in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "word"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sawdust-mark.svg",
    height: "27",
    alt: ""
  }), "Sawdust"), /*#__PURE__*/React.createElement("div", {
    className: "mnav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#lists"
  }, "Lists"), /*#__PURE__*/React.createElement("a", {
    href: "#ratings"
  }, "Ratings")), /*#__PURE__*/React.createElement("div", {
    className: "mnav__right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mnav__signin",
    href: "#"
  }, "Sign in"), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "sm"
  }, "Get started"))));
}

/* a poster in the wall with hover caption */
function WallPoster({
  film
}) {
  const f = SD_DATA.films[film];
  return /*#__PURE__*/React.createElement("div", {
    className: "poster-hover"
  }, /*#__PURE__*/React.createElement(Poster, {
    film: film,
    hover: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sd-tag",
    style: {
      background: 'rgba(20,15,10,.72)',
      color: '#F3E8D6'
    }
  }, f.title)));
}
function Wall() {
  const ids = Object.keys(SD_DATA.films);
  // build a mixed sequence: posters + curated cards (the Cosmos "cluster" feel)
  const items = [];
  ids.forEach((id, i) => {
    items.push(/*#__PURE__*/React.createElement(WallPoster, {
      key: id,
      film: id
    }));
    if (i === 2) items.push(/*#__PURE__*/React.createElement("div", {
      key: "q1",
      className: "wcard quote"
    }, "\u201COkay. You were right. The train scene.\u201D", /*#__PURE__*/React.createElement("div", {
      className: "qfoot"
    }, /*#__PURE__*/React.createElement(Avatar, {
      person: "manvi",
      size: 22
    }), "Manvi, on Before Sunrise")));
    if (i === 5) items.push(/*#__PURE__*/React.createElement("div", {
      key: "s1",
      className: "wcard send"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement(Avatar, {
      person: "tisha",
      size: 26
    }), /*#__PURE__*/React.createElement("span", {
      className: "nm"
    }, "Tisha sent you", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-faint)',
        fontWeight: 400
      }
    }, "In the Mood for Love")))));
    if (i === 8) items.push(/*#__PURE__*/React.createElement("div", {
      key: "q2",
      className: "wcard quote",
      style: {
        fontSize: 18
      }
    }, "\u201CDo NOT watch this when you\u2019re already sad.\u201D", /*#__PURE__*/React.createElement("div", {
      className: "qfoot"
    }, /*#__PURE__*/React.createElement(Avatar, {
      person: "rohan",
      size: 22
    }), "Rohan, on Aftersun")));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "wall-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wall"
  }, items)), /*#__PURE__*/React.createElement("div", {
    className: "wall-fade-bot"
  }));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "wrap hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "popcorn",
    size: 15,
    color: "var(--amber-deep)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      color: 'var(--ink-soft)'
    }
  }, "Movies are better when you share them")), /*#__PURE__*/React.createElement("h1", null, "Make your friends watch the films you ", /*#__PURE__*/React.createElement("em", null, "love"), "."), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Sawdust is where you hand a film to a friend, watch it together, and trade honest ratings back. Not a feed. A ritual."), /*#__PURE__*/React.createElement("div", {
    className: "cta"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    icon: "send"
  }, "Start sharing taste"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    size: "lg",
    icon: "play"
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    className: "trust"
  }, /*#__PURE__*/React.createElement("span", {
    className: "av"
  }, /*#__PURE__*/React.createElement(Avatar, {
    person: "manvi"
  }), /*#__PURE__*/React.createElement(Avatar, {
    person: "tisha"
  }), /*#__PURE__*/React.createElement(Avatar, {
    person: "rohan"
  })), /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      marginLeft: 12
    }
  }, "join 40,000 people swapping taste")));
}
function Steps() {
  const steps = [{
    n: '01',
    ic: 'send',
    h: 'Recommend it',
    p: 'Hand a film to a friend with a personal note and your own rating. “You have to watch this” — finally with a button.'
  }, {
    n: '02',
    ic: 'popcorn',
    h: 'Watch together',
    p: 'Together on the couch or apart on a Tuesday. Sawdust nudges, plans, and keeps track of who’s seen what.'
  }, {
    n: '03',
    ic: 'star',
    h: 'Rate it back',
    p: 'They rate it — to you, not the void. Your two ratings sit side by side. Agreeing is sweet. Disagreeing is funnier.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec wrap",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "The ritual"), /*#__PURE__*/React.createElement("h2", null, "Three steps. One inside joke that lasts for years.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p)))));
}
function Clusters() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec wrap",
    id: "lists"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Shared lists"), /*#__PURE__*/React.createElement("h2", null, "Keep a running list with everyone you watch with."), /*#__PURE__*/React.createElement("p", null, "A list for your best friend. One for the horror group. One for bad days. They never really end \u2014 that\u2019s the point.")), /*#__PURE__*/React.createElement("div", {
    className: "pills"
  }, ['Me + Manvi', 'Sunday Horror Club', 'Comfort watches', 'Date night', 'Films Rohan owes me'].map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    active: t === 'Me + Manvi'
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "clusters"
  }, SD_DATA.lists.map(l => /*#__PURE__*/React.createElement("div", {
    className: "cluster",
    key: l.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "stk"
  }, l.films.slice(0, 4).map((x, i) => /*#__PURE__*/React.createElement(Poster, {
    key: i,
    film: x.film,
    style: {
      zIndex: 10 - i
    }
  }))), /*#__PURE__*/React.createElement("h3", null, l.title), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, l.sub), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, l.members.map(m => /*#__PURE__*/React.createElement(Avatar, {
    key: m,
    person: m,
    size: 26,
    style: {
      marginRight: -8
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, l.films.length, " films"))))));
}
function Ratings() {
  const rows = [{
    f: 'whiplash',
    you: 5,
    them: 2,
    who: 'manvi',
    clash: true
  }, {
    f: 'sunrise',
    you: 4,
    them: 4.5,
    who: 'manvi'
  }, {
    f: 'cmbyn',
    you: 4.5,
    them: 4,
    who: 'manvi'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "ratings-band",
    id: "ratings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "The Sawdust difference"), /*#__PURE__*/React.createElement("h2", null, "Two ratings. Side by side."), /*#__PURE__*/React.createElement("p", null, "Nobody else does this. Five honest stars from you, five from your friend \u2014 and the gap between them, which is where every good argument starts. Agreeing is sweet. Disagreeing is the whole point."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    icon: "star"
  }, "Rate your first film"))), /*#__PURE__*/React.createElement("div", {
    className: "versus"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "overline"
  }, "You"), /*#__PURE__*/React.createElement("span", {
    className: "overline"
  }, "Manvi")), rows.map((r, i) => {
    const f = SD_DATA.films[r.f];
    return /*#__PURE__*/React.createElement("div", {
      className: 'vrow' + (r.clash ? ' clash' : ''),
      key: i
    }, /*#__PURE__*/React.createElement(Poster, {
      film: r.f,
      style: {
        width: 40,
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14.5
      }
    }, f.title), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, r.clash ? 'you two could not disagree more' : f.year)), /*#__PURE__*/React.createElement(Stars, {
      value: r.you
    }), /*#__PURE__*/React.createElement("span", {
      className: "meta vs"
    }, "vs"), /*#__PURE__*/React.createElement(Stars, {
      value: r.them
    }));
  })))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap cta-inner"
  }, /*#__PURE__*/React.createElement("h2", null, "Start sharing what you ", /*#__PURE__*/React.createElement("em", null, "love"), "."), /*#__PURE__*/React.createElement("div", {
    className: "email"
  }, /*#__PURE__*/React.createElement("input", {
    className: "sd-input",
    placeholder: "your@email.com"
  }), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary"
  }, "Get started")), /*#__PURE__*/React.createElement("p", {
    className: "meta",
    style: {
      marginTop: 14,
      color: 'var(--ink-faint)'
    }
  }, "free forever \xB7 no ads \xB7 your taste stays yours")));
}
function Footer() {
  const cols = [{
    h: 'Product',
    links: ['How it works', 'Lists', 'Ratings', 'For couples', 'For groups']
  }, {
    h: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press']
  }, {
    h: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "word"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sawdust-mark.svg",
    height: "30",
    alt: ""
  }), "Sawdust"), /*#__PURE__*/React.createElement("p", {
    className: "body-sm",
    style: {
      maxWidth: 260,
      marginTop: 12
    }
  }, "What the film left on you. Shared with the people you watch with.")), /*#__PURE__*/React.createElement("div", {
    className: "foot__cols"
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    className: "foot__col",
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", null, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#"
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    className: "foot__base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Sawdust. Made for people with opinions."), /*#__PURE__*/React.createElement("span", null, "Posters shown are branded placeholders."))));
}
Object.assign(window, {
  MNav,
  Wall,
  Hero,
  Steps,
  Clusters,
  Ratings,
  CTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/AppBar.jsx
try { (() => {
/* Sawdust web app — top app bar */
function AppBar({
  route,
  go,
  onSend
}) {
  const nav = [{
    id: 'home',
    label: 'For you'
  }, {
    id: 'lists',
    label: 'Lists'
  }, {
    id: 'friends',
    label: 'Friends'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "app-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-bar__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-bar__logo",
    onClick: () => go({
      screen: 'home'
    })
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sawdust-mark.svg",
    height: "26",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "word"
  }, "Sawdust")), /*#__PURE__*/React.createElement("nav", {
    className: "app-nav"
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    className: route.screen === n.id ? 'active' : '',
    onClick: () => go({
      screen: n.id
    })
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "app-search"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 16,
      color: 'var(--ink-faint)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  })), /*#__PURE__*/React.createElement("input", {
    className: "sd-input",
    placeholder: "Films, friends, lists\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "app-bar__right"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "sm",
    icon: "send",
    onClick: () => onSend()
  }, "Send a film"), /*#__PURE__*/React.createElement("span", {
    onClick: () => go({
      screen: 'profile',
      id: 'you'
    }),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    person: "you",
    size: 34
  })))));
}
Object.assign(window, {
  AppBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/AppBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/SendSheet.jsx
try { (() => {
/* Sawdust web app — "Send a film" recommend modal */
function SendSheet({
  film,
  onClose,
  onSent
}) {
  const [friend, setFriend] = useState(null);
  const [rating, setRating] = useState(0);
  const [note, setNote] = useState('');
  const [pickFilm, setPickFilm] = useState(film || null);
  const friends = ['manvi', 'tisha', 'rohan'];
  const f = pickFilm ? SD_DATA.films[pickFilm] : null;
  const ready = friend && pickFilm;
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h3"
  }, "Send a film"), /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      cursor: 'pointer',
      fontSize: 20,
      color: 'var(--ink-faint)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sheet__body"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      marginBottom: 8
    }
  }, "To whom?"), /*#__PURE__*/React.createElement("div", {
    className: "friend-pick"
  }, friends.map(id => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: 'fp' + (friend === id ? ' sel' : ''),
    onClick: () => setFriend(id)
  }, /*#__PURE__*/React.createElement(Avatar, {
    person: id,
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, SD_DATA.people[id].name))))), f ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      background: 'var(--paper-raised)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-md)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(Poster, {
    film: pickFilm,
    style: {
      width: 52,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h4"
  }, f.title), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, f.year, " \xB7 ", f.dir)), /*#__PURE__*/React.createElement("span", {
    className: "link-more",
    onClick: () => setPickFilm(null)
  }, "change")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      marginBottom: 8
    }
  }, "Which film?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      paddingBottom: 4
    }
  }, ['mood', 'spirited', 'paddington', 'aftersun', 'portrait'].map(id => /*#__PURE__*/React.createElement(Poster, {
    key: id,
    film: id,
    hover: true,
    onClick: () => setPickFilm(id),
    style: {
      width: 64,
      flex: 'none',
      cursor: 'pointer'
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      marginBottom: 8
    }
  }, "Your rating ", /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      textTransform: 'none',
      letterSpacing: 0
    }
  }, "\u2014 be honest")), /*#__PURE__*/React.createElement(StarInput, {
    value: rating,
    onChange: setRating
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      marginBottom: 8
    }
  }, "Why they have to watch it"), /*#__PURE__*/React.createElement("textarea", {
    className: "sd-input",
    rows: 2,
    style: {
      resize: 'none',
      fontFamily: 'var(--sans)'
    },
    placeholder: "Make your case\u2026",
    value: note,
    onChange: e => setNote(e.target.value)
  })), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    disabled: !ready,
    onClick: () => onSent(SD_DATA.people[friend].name, f.title),
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, ready ? `Send to ${SD_DATA.people[friend].name}` : 'Pick a friend & a film'))));
}
Object.assign(window, {
  SendSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/SendSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/app.jsx
try { (() => {
/* Sawdust web app — root app + router */
function RateModal({
  film,
  onClose,
  onDone
}) {
  const f = SD_DATA.films[film];
  const [r, setR] = useState(0);
  const [note, setNote] = useState('');
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h3"
  }, "Rate it back"), /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      cursor: 'pointer',
      fontSize: 20,
      color: 'var(--ink-faint)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sheet__body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Poster, {
    film: film,
    style: {
      width: 52,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h4"
  }, f.title), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, f.year, " \xB7 ", f.dir))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      marginBottom: 8
    }
  }, "What'd you think? ", /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      textTransform: 'none',
      letterSpacing: 0
    }
  }, "\u2014 they'll see this")), /*#__PURE__*/React.createElement(StarInput, {
    value: r,
    onChange: setR,
    size: 30
  })), /*#__PURE__*/React.createElement("textarea", {
    className: "sd-input",
    rows: 2,
    style: {
      resize: 'none',
      fontFamily: 'var(--sans)'
    },
    placeholder: "Say something. They watched it for you.",
    value: note,
    onChange: e => setNote(e.target.value)
  }), /*#__PURE__*/React.createElement(Btn, {
    variant: "watch",
    disabled: !r,
    style: {
      width: '100%',
      justifyContent: 'center'
    },
    onClick: () => onDone(f.title, r)
  }, r ? 'Send your rating' : 'Pick a rating'))));
}
function App() {
  const [route, setRoute] = useState({
    screen: 'home'
  });
  const [send, setSend] = useState(null); // {film} or {film:null}
  const [rateFilm, setRateFilm] = useState(null);
  const [toast, setToast] = useState(null);
  useLucide();
  useEffect(() => {
    if (window.loadPosters) window.loadPosters(SD_DATA.films);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 2600);
      return () => clearTimeout(t);
    }
  }, [toast]);
  const go = r => setRoute(r);
  const openSend = film => setSend({
    film
  });
  const flash = msg => setToast(msg);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    route: route,
    go: go,
    onSend: () => openSend(null)
  }), route.screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    openSend: openSend,
    rate: setRateFilm
  }), route.screen === 'film' && /*#__PURE__*/React.createElement(FilmDetail, {
    id: route.id,
    go: go,
    openSend: openSend
  }), route.screen === 'lists' && /*#__PURE__*/React.createElement(ListsScreen, {
    go: go
  }), route.screen === 'list' && /*#__PURE__*/React.createElement(ListScreen, {
    id: route.id,
    go: go,
    openSend: openSend,
    rate: setRateFilm
  }), route.screen === 'friends' && /*#__PURE__*/React.createElement(FriendsScreen, {
    go: go,
    openSend: openSend
  }), route.screen === 'profile' && /*#__PURE__*/React.createElement(ProfileScreen, {
    id: route.id,
    go: go,
    openSend: openSend
  }), send && /*#__PURE__*/React.createElement(SendSheet, {
    film: send.film,
    onClose: () => setSend(null),
    onSent: (name, title) => {
      setSend(null);
      flash(`Sent “${title}” to ${name}.`);
    }
  }), rateFilm && /*#__PURE__*/React.createElement(RateModal, {
    film: rateFilm,
    onClose: () => setRateFilm(null),
    onDone: (title, r) => {
      setRateFilm(null);
      flash(`You rated “${title}” ${r.toFixed(1)} ★`);
    }
  }), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--watched)"
  }), toast));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/cards.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sawdust web app — cards & rows */

/* Small poster-forward film card (used in grids/rows) */
function FilmCard({
  film,
  fromTag,
  rating,
  onOpen,
  width = 150
}) {
  const f = SD_DATA.films[film];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Poster, {
    film: film,
    hover: true,
    onClick: () => onOpen(film),
    style: {
      cursor: 'pointer'
    }
  }), fromTag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "ox"
  }, fromTag))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h4",
    style: {
      cursor: 'pointer'
    },
    onClick: () => onOpen(film)
  }, f.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 3
    }
  }, rating != null ? /*#__PURE__*/React.createElement(Stars, {
    value: rating
  }) : /*#__PURE__*/React.createElement(Stars, {
    value: f.avg
  }), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, (rating ?? f.avg).toFixed(1), " \xB7 ", f.runtime))));
}

/* Inbox recommendation card — "X sent you this" */
function RecCard({
  rec,
  onOpen,
  onRate
}) {
  const f = SD_DATA.films[rec.film];
  const from = SD_DATA.people[rec.from];
  return /*#__PURE__*/React.createElement("div", {
    className: "sd-card sd-card--hover",
    style: {
      width: 280,
      flex: '0 0 auto',
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Poster, {
    film: rec.film,
    hover: true,
    onClick: () => onOpen(rec.film),
    style: {
      width: 76,
      flex: 'none',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    person: rec.from,
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, from.name, " \xB7 ", rec.when)), /*#__PURE__*/React.createElement("div", {
    className: "h4",
    style: {
      marginBottom: 2
    }
  }, f.title), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "they gave it ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, '★'.repeat(Math.round(rec.rating)))))), /*#__PURE__*/React.createElement("p", {
    className: "body-sm",
    style: {
      margin: 0,
      fontStyle: 'italic',
      color: 'var(--ink-soft)'
    }
  }, "\u201C", rec.note, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "watch",
    size: "sm",
    icon: "popcorn",
    onClick: () => onRate(rec.film)
  }, "Watched it"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    size: "sm",
    onClick: () => onOpen(rec.film)
  }, "Details")));
}

/* Shared-list preview card (home) */
function ListCard({
  list,
  onOpen
}) {
  const previews = list.films.slice(0, 4);
  return /*#__PURE__*/React.createElement("div", {
    className: "sd-card sd-card--hover list-card",
    onClick: () => onOpen(list.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, previews.map((x, i) => /*#__PURE__*/React.createElement(Poster, {
    key: i,
    film: x.film,
    style: {
      zIndex: 10 - i
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h3"
  }, list.title), /*#__PURE__*/React.createElement("div", {
    className: "body-sm",
    style: {
      marginTop: 2
    }
  }, list.sub)), /*#__PURE__*/React.createElement("div", {
    className: "meta-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatars"
  }, list.members.map(m => /*#__PURE__*/React.createElement(Avatar, {
    key: m,
    person: m
  }))), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, list.films.length, " films \xB7 ", list.films.filter(f => !f.watched).length, " to watch")));
}

/* Reels-style comment + thread */
function Comment({
  person,
  text,
  when,
  likes,
  liked,
  reply,
  onLike
}) {
  const p = SD_DATA.people[person];
  const [on, setOn] = useState(!!liked);
  const n = likes + (on && !liked ? 1 : 0) - (!on && liked ? 1 : 0);
  return /*#__PURE__*/React.createElement("div", {
    className: 'cmt' + (reply ? ' reply' : '')
  }, /*#__PURE__*/React.createElement(Avatar, {
    person: person,
    size: reply ? 28 : 32
  }), /*#__PURE__*/React.createElement("div", {
    className: "cbody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, p.name.toLowerCase()), " ", /*#__PURE__*/React.createElement("span", {
    className: "txt"
  }, text)), /*#__PURE__*/React.createElement("div", {
    className: "csub"
  }, /*#__PURE__*/React.createElement("span", null, when), /*#__PURE__*/React.createElement("span", null, n, " likes"), /*#__PURE__*/React.createElement("b", null, "Reply"))), /*#__PURE__*/React.createElement("div", {
    className: "heart"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'h' + (on ? ' on' : ''),
    onClick: () => setOn(v => !v)
  }, on ? '♥' : '♡'), n));
}
function CommentThread({
  comments
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cmts"
  }, comments.map((c, i) => /*#__PURE__*/React.createElement(Comment, _extends({
    key: i
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "composer"
  }, /*#__PURE__*/React.createElement(Avatar, {
    person: "you",
    size: 28
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Add a comment\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    className: "post"
  }, "Post")));
}
Object.assign(window, {
  FilmCard,
  RecCard,
  ListCard,
  Comment,
  CommentThread
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/cards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/data.js
try { (() => {
/* Sawdust web app — sample data. Exposed as window.SD_DATA.
   Posters load real artwork live from Wikipedia (see posters.js),
   falling back to the branded placeholder (color field + title). */
window.SD_DATA = function () {
  const films = {
    sunrise: {
      id: 'sunrise',
      wiki: 'Before Sunrise',
      title: 'Before Sunrise',
      year: 1995,
      runtime: '1h 41m',
      cert: 'R',
      dir: 'Richard Linklater',
      genres: ['Romance', 'Drama'],
      pp: '#2E4A4A',
      ink: '#EADCC2',
      avg: 4.3,
      synopsis: 'A young American and a French woman meet on a train and spend one luminous night walking through Vienna, talking about everything and nothing.'
    },
    mood: {
      id: 'mood',
      wiki: 'In the Mood for Love',
      title: 'In the Mood for Love',
      year: 2000,
      runtime: '1h 38m',
      cert: 'PG',
      dir: 'Wong Kar-wai',
      genres: ['Romance', 'Drama'],
      pp: '#6E2433',
      ink: '#F0D9B8',
      avg: 4.5,
      synopsis: 'Two neighbors form a quiet, aching bond when they discover their spouses are having an affair. Restraint has never looked so devastating.'
    },
    pastlives: {
      id: 'pastlives',
      wiki: 'Past Lives (film)',
      title: 'Past Lives',
      year: 2023,
      runtime: '1h 46m',
      cert: 'PG-13',
      dir: 'Celine Song',
      genres: ['Romance', 'Drama'],
      pp: '#3A4663',
      ink: '#E7DAC4',
      avg: 4.2,
      synopsis: 'Two childhood friends reunite decades later for one week in New York, circling the lives they did and didn’t live.'
    },
    eeaao: {
      id: 'eeaao',
      wiki: 'Everything Everywhere All at Once',
      title: 'Everything Everywhere All at Once',
      year: 2022,
      runtime: '2h 19m',
      cert: 'R',
      dir: 'Daniels',
      genres: ['Sci-Fi', 'Comedy'],
      pp: '#7A2E63',
      ink: '#F2DCAC',
      avg: 4.1,
      synopsis: 'A laundromat owner is pulled across the multiverse to save existence, one googly eye and tax audit at a time.'
    },
    budapest: {
      id: 'budapest',
      wiki: 'The Grand Budapest Hotel',
      title: 'The Grand Budapest Hotel',
      year: 2014,
      runtime: '1h 39m',
      cert: 'R',
      dir: 'Wes Anderson',
      genres: ['Comedy', 'Caper'],
      pp: '#B0506B',
      ink: '#FBEAD0',
      avg: 4.0,
      synopsis: 'A legendary concierge and his protégé tangle with a priceless painting, a murder, and a missing fortune.'
    },
    spirited: {
      id: 'spirited',
      wiki: 'Spirited Away',
      title: 'Spirited Away',
      year: 2001,
      runtime: '2h 5m',
      cert: 'PG',
      dir: 'Hayao Miyazaki',
      genres: ['Animation', 'Fantasy'],
      pp: '#2F5E4F',
      ink: '#EFE0BE',
      avg: 4.6,
      synopsis: 'A girl wanders into a spirit world bathhouse and must work to free her parents — and find her name.'
    },
    portrait: {
      id: 'portrait',
      wiki: 'Portrait of a Lady on Fire',
      title: 'Portrait of a Lady on Fire',
      year: 2019,
      runtime: '2h 2m',
      cert: 'R',
      dir: 'Céline Sciamma',
      genres: ['Romance', 'Drama'],
      pp: '#1E3A4A',
      ink: '#E9CFA8',
      avg: 4.4,
      synopsis: 'A painter falls for the woman she’s secretly been commissioned to paint, in the fleeting freedom of an island summer.'
    },
    whiplash: {
      id: 'whiplash',
      wiki: 'Whiplash (2014 film)',
      title: 'Whiplash',
      year: 2014,
      runtime: '1h 47m',
      cert: 'R',
      dir: 'Damien Chazelle',
      genres: ['Drama', 'Music'],
      pp: '#2A2622',
      ink: '#E6B85C',
      avg: 4.3,
      synopsis: 'A young drummer and a ruthless instructor push each other toward greatness, or ruin. Not quite my tempo.'
    },
    ladybird: {
      id: 'ladybird',
      wiki: 'Lady Bird (film)',
      title: 'Lady Bird',
      year: 2017,
      runtime: '1h 34m',
      cert: 'R',
      dir: 'Greta Gerwig',
      genres: ['Comedy', 'Drama'],
      pp: '#B85C72',
      ink: '#FCEAD2',
      avg: 4.0,
      synopsis: 'A senior year in Sacramento, a mother and daughter who love each other badly, and a girl desperate to be from somewhere else.'
    },
    aftersun: {
      id: 'aftersun',
      wiki: 'Aftersun',
      title: 'Aftersun',
      year: 2022,
      runtime: '1h 41m',
      cert: 'R',
      dir: 'Charlotte Wells',
      genres: ['Drama'],
      pp: '#C26A33',
      ink: '#2A1B10',
      avg: 4.2,
      synopsis: 'A woman pieces together a long-ago Turkish holiday with her young father from camcorder fragments and memory.'
    },
    paddington: {
      id: 'paddington',
      wiki: 'Paddington 2',
      title: 'Paddington 2',
      year: 2017,
      runtime: '1h 43m',
      cert: 'PG',
      dir: 'Paul King',
      genres: ['Family', 'Comedy'],
      pp: '#34618C',
      ink: '#F4DDB4',
      avg: 4.4,
      synopsis: 'A very polite bear, a stolen pop-up book, and the most wholesome prison break ever committed to film.'
    },
    cmbyn: {
      id: 'cmbyn',
      wiki: 'Call Me by Your Name (film)',
      title: 'Call Me by Your Name',
      year: 2017,
      runtime: '2h 12m',
      cert: 'R',
      dir: 'Luca Guadagnino',
      genres: ['Romance', 'Drama'],
      pp: '#5E7741',
      ink: '#F3E4C0',
      avg: 4.1,
      synopsis: 'One Italian summer, a first love, and a peach. You will not be okay by the end credits.'
    }
  };
  const people = {
    you: {
      id: 'you',
      name: 'You',
      initial: 'Y',
      color: '#C25E2A'
    },
    manvi: {
      id: 'manvi',
      name: 'Manvi',
      initial: 'M',
      color: '#6E2433'
    },
    tisha: {
      id: 'tisha',
      name: 'Tisha',
      initial: 'T',
      color: '#2E4A4A'
    },
    rohan: {
      id: 'rohan',
      name: 'Rohan',
      initial: 'R',
      color: '#3A4663'
    }
  };

  // recommendations waiting on you (from friends)
  const inbox = [{
    from: 'tisha',
    film: 'mood',
    rating: 5,
    note: 'You keep saying you “like slow films.” Prove it. Watch this and call me.',
    when: '2d'
  }, {
    from: 'manvi',
    film: 'aftersun',
    rating: 4.5,
    note: 'Do NOT watch this when you’re already sad. Learn from my mistake.',
    when: '4d'
  }, {
    from: 'rohan',
    film: 'eeaao',
    rating: 4,
    note: 'Hot dog fingers. That’s all I’ll say.',
    when: '1w'
  }];

  // shared lists
  const lists = [{
    id: 'memanvi',
    title: 'Me + Manvi',
    sub: 'The “we have wildly different taste” list',
    members: ['you', 'manvi'],
    films: [{
      film: 'sunrise',
      addedBy: 'you',
      you: 4,
      them: 4.5,
      watched: true
    }, {
      film: 'mood',
      addedBy: 'you',
      you: 5,
      them: null,
      watched: false
    }, {
      film: 'whiplash',
      addedBy: 'manvi',
      you: 5,
      them: 2,
      watched: true
    }, {
      film: 'cmbyn',
      addedBy: 'manvi',
      you: null,
      them: 4,
      watched: false
    }, {
      film: 'portrait',
      addedBy: 'you',
      you: null,
      them: null,
      watched: false
    }]
  }, {
    id: 'horror',
    title: 'Sunday Horror Club',
    sub: 'Three people, zero spines',
    members: ['you', 'tisha', 'rohan'],
    films: [{
      film: 'eeaao',
      addedBy: 'rohan',
      you: 4,
      them: 4,
      watched: true
    }, {
      film: 'budapest',
      addedBy: 'tisha',
      you: 4,
      them: null,
      watched: false
    }]
  }, {
    id: 'comfort',
    title: 'Comfort watches',
    sub: 'For bad days',
    members: ['you', 'manvi', 'tisha'],
    films: [{
      film: 'paddington',
      addedBy: 'you',
      you: 4.5,
      them: 5,
      watched: true
    }, {
      film: 'spirited',
      addedBy: 'tisha',
      you: 5,
      them: 5,
      watched: true
    }, {
      film: 'budapest',
      addedBy: 'you',
      you: 4,
      them: 4,
      watched: true
    }]
  }];

  // your diary (recently rated)
  const diary = [{
    film: 'spirited',
    rating: 5,
    when: 'May 24'
  }, {
    film: 'whiplash',
    rating: 5,
    when: 'May 18'
  }, {
    film: 'paddington',
    rating: 4.5,
    when: 'May 11'
  }, {
    film: 'sunrise',
    rating: 4,
    when: 'May 3'
  }, {
    film: 'ladybird',
    rating: 4,
    when: 'Apr 28'
  }, {
    film: 'pastlives',
    rating: 4.5,
    when: 'Apr 20'
  }];
  const streaming = {
    mood: ['MUBI', 'Criterion'],
    aftersun: ['Max', 'Prime'],
    eeaao: ['Showtime', 'Prime'],
    sunrise: ['Max'],
    spirited: ['Max'],
    pastlives: ['Prime', 'Apple TV']
  };
  return {
    films,
    people,
    inbox,
    lists,
    diary,
    streaming
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/web_app/posters.js
try { (() => {
/* Sawdust — real poster loader.
   Pulls official poster artwork live from Wikipedia's MediaWiki API
   (CORS-enabled via origin=*), batched in one request, cached in
   localStorage. Posters fall back to the branded placeholder if a
   title has no image or the network is unavailable.

   Exposes:
     window.__SD_POSTERS         map: wikiTitle -> image URL
     window.loadPosters(films)   kicks off the fetch + caches + notifies
   Components listen for the 'sd-posters' event to re-render. */
(function () {
  const CACHE_KEY = 'sd_posters_v1';
  try {
    window.__SD_POSTERS = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
  } catch (e) {
    window.__SD_POSTERS = {};
  }
  function notify() {
    window.dispatchEvent(new Event('sd-posters'));
  }
  window.loadPosters = async function (films) {
    const titles = Object.values(films).map(f => f.wiki).filter(Boolean);
    // if everything is already cached, just notify and skip the network
    const missing = titles.filter(t => !window.__SD_POSTERS[t]);
    if (missing.length === 0) {
      notify();
      return;
    }
    const endpoint = 'https://en.wikipedia.org/w/api.php';
    const params = new URLSearchParams({
      action: 'query',
      format: 'json',
      origin: '*',
      prop: 'pageimages',
      piprop: 'thumbnail',
      pithumbsize: '600',
      pilicense: 'any',
      redirects: '1',
      titles: titles.join('|')
    });
    try {
      const res = await fetch(endpoint + '?' + params.toString());
      const data = await res.json();
      const q = data.query || {};
      // map any normalized / redirected titles back to our originals
      const alias = {};
      (q.normalized || []).forEach(n => {
        alias[n.to] = n.from;
      });
      (q.redirects || []).forEach(r => {
        alias[r.to] = alias[r.from] || r.from;
      });
      Object.values(q.pages || {}).forEach(p => {
        if (p.thumbnail && p.thumbnail.source) {
          const original = alias[p.title] || p.title;
          window.__SD_POSTERS[original] = p.thumbnail.source;
          // also key by the page's own title for safety
          window.__SD_POSTERS[p.title] = p.thumbnail.source;
        }
      });
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(window.__SD_POSTERS));
      } catch (e) {}
      notify();
    } catch (e) {
      // offline / blocked — placeholders remain, no error surfaced
      notify();
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/posters.js", error: String((e && e.message) || e) }); }

// ui_kits/web_app/primitives.jsx
try { (() => {
/* Sawdust web app — primitives. Exposes components on window. */
const {
  useState,
  useEffect,
  useRef
} = React;

/* ---- Icon (Lucide via CDN). Size = font-size in px. ---- */
function Icon({
  name,
  size = 18,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ico",
    style: {
      fontSize: size,
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": name
  }));
}
// re-render Lucide glyphs after React paints
function useLucide(dep) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

/* ---- Avatar ---- */
function Avatar({
  person,
  size = 32,
  className = '',
  style
}) {
  const p = typeof person === 'string' ? SD_DATA.people[person] : person;
  return /*#__PURE__*/React.createElement("span", {
    className: 'sd-avatar ' + className,
    style: {
      background: p.color,
      width: size,
      height: size,
      fontSize: size * 0.42,
      ...style
    },
    title: p.name
  }, p.initial);
}

/* ---- Poster (real Wikipedia artwork over branded placeholder fallback) ---- */
function Poster({
  film,
  className = '',
  style,
  onClick,
  hover
}) {
  const f = typeof film === 'string' ? SD_DATA.films[film] : film;
  const get = () => window.__SD_POSTERS && window.__SD_POSTERS[f.wiki] || null;
  const [url, setUrl] = useState(get());
  const [ok, setOk] = useState(true);
  useEffect(() => {
    const h = () => setUrl(get());
    window.addEventListener('sd-posters', h);
    return () => window.removeEventListener('sd-posters', h);
  }, [f.wiki]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'sd-pp ' + (hover ? 'sd-poster--hover ' : '') + className,
    style: {
      '--pp': f.pp,
      '--pp-ink': f.ink,
      ...style
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "pp-rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pp-title"
  }, f.title), /*#__PURE__*/React.createElement("div", {
    className: "pp-meta"
  }, f.dir.split(' ').slice(-1)[0], " \xB7 ", f.year), url && ok && /*#__PURE__*/React.createElement("img", {
    className: "sd-pp__img",
    src: url,
    alt: f.title,
    onError: () => setOk(false)
  }));
}

/* ---- Static star display (supports halves) ---- */
function Stars({
  value = 0,
  size = 'sm'
}) {
  const cls = size === 'lg' ? 'sd-stars sd-stars--lg' : size === 'md' ? 'sd-stars' : 'sd-stars sd-stars--sm';
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const fill = value >= i ? 1 : value >= i - 0.5 ? 0.5 : 0;
    stars.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'relative',
        display: 'inline-block'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "empty"
    }, "\u2605"), fill > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: fill === 0.5 ? '50%' : '100%',
        overflow: 'hidden',
        color: 'var(--gold)'
      }
    }, "\u2605")));
  }
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, stars);
}

/* ---- Interactive star input (half-step on left/right of glyph) ---- */
function StarInput({
  value,
  onChange,
  size = 26
}) {
  const [hover, setHover] = useState(0);
  const shown = hover || value || 0;
  return /*#__PURE__*/React.createElement("span", {
    className: "star-input",
    style: {
      fontSize: size
    },
    onMouseLeave: () => setHover(0)
  }, [1, 2, 3, 4, 5].map(i => {
    const lit = shown >= i;
    const half = !lit && shown >= i - 0.5;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: 's' + (lit || half ? ' lit' : ''),
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: half ? 'var(--line-strong)' : 'inherit'
      }
    }, "\u2605"), half && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50%',
        overflow: 'hidden',
        color: 'var(--gold)'
      }
    }, "\u2605"), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50%',
        height: '100%'
      },
      onMouseEnter: () => setHover(i - 0.5),
      onClick: () => onChange(i - 0.5)
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50%',
        height: '100%'
      },
      onMouseEnter: () => setHover(i),
      onClick: () => onChange(i)
    }));
  }));
}

/* ---- Button ---- */
function Btn({
  variant = 'primary',
  size,
  children,
  onClick,
  icon,
  disabled,
  style
}) {
  const cls = ['sd-btn', 'sd-btn--' + variant, size ? 'sd-btn--' + size : ''].join(' ');
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: onClick,
    disabled: disabled,
    style: style
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === 'sm' ? 15 : 17
  }), children);
}

/* ---- Tag / Chip ---- */
function Tag({
  tone,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'sd-tag' + (tone ? ' sd-tag--' + tone : '')
  }, children);
}
function Chip({
  active,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'sd-chip' + (active ? ' sd-chip--active' : ''),
    onClick: onClick
  }, children);
}
Object.assign(window, {
  Icon,
  useLucide,
  Avatar,
  Poster,
  Stars,
  StarInput,
  Btn,
  Tag,
  Chip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/screens.jsx
try { (() => {
/* Sawdust web app — screens */

/* ---------------- HOME / FOR YOU ---------------- */
function HomeScreen({
  go,
  openSend,
  rate
}) {
  const [hero, ...rest] = SD_DATA.inbox;
  const hf = SD_DATA.films[hero.film];
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "overline",
    style: {
      marginBottom: 8
    }
  }, "Tuesday evening"), /*#__PURE__*/React.createElement("h1", {
    className: "display-m",
    style: {
      margin: 0
    }
  }, "3 films are waiting on you."), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      margin: '6px 0 0'
    }
  }, "Your friends have taste and opinions. Mostly opinions.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-rec section"
  }, /*#__PURE__*/React.createElement(Poster, {
    film: hero.film,
    hover: true,
    onClick: () => go({
      screen: 'film',
      id: hero.film
    }),
    style: {
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-rec__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "from-line"
  }, /*#__PURE__*/React.createElement(Avatar, {
    person: hero.from,
    size: 30
  }), /*#__PURE__*/React.createElement("span", {
    className: "body-sm"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, SD_DATA.people[hero.from].name), " sent you this \xB7 ", hero.when), /*#__PURE__*/React.createElement(Tag, {
    tone: "ox"
  }, "For you")), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, "\u201C", hero.note, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "h2",
    style: {
      fontFamily: 'var(--serif-display)',
      fontWeight: 400
    }
  }, hf.title), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, hf.year, " \xB7 ", hf.runtime, " \xB7 they gave it ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, '★'.repeat(Math.round(hero.rating))))), /*#__PURE__*/React.createElement("div", {
    className: "acts"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "watch",
    icon: "popcorn",
    onClick: () => rate(hero.film)
  }, "I watched it \u2014 rate back"), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    icon: "calendar"
  }, "Plan a watch"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => go({
      screen: 'film',
      id: hero.film
    })
  }, "Details")))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ttl"
  }, "Waiting on you")), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, rest.length, " unwatched")), /*#__PURE__*/React.createElement("div", {
    className: "poster-row"
  }, rest.map((r, i) => /*#__PURE__*/React.createElement(RecCard, {
    key: i,
    rec: r,
    onOpen: f => go({
      screen: 'film',
      id: f
    }),
    onRate: rate
  })), rest.map((r, i) => /*#__PURE__*/React.createElement(RecCard, {
    key: 'b' + i,
    rec: r,
    onOpen: f => go({
      screen: 'film',
      id: f
    }),
    onRate: rate
  })))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ttl"
  }, "Your shared lists")), /*#__PURE__*/React.createElement("button", {
    className: "link-more",
    onClick: () => go({
      screen: 'lists'
    })
  }, "See all")), /*#__PURE__*/React.createElement("div", {
    className: "poster-row"
  }, SD_DATA.lists.map(l => /*#__PURE__*/React.createElement(ListCard, {
    key: l.id,
    list: l,
    onOpen: id => go({
      screen: 'list',
      id
    })
  })))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ttl"
  }, "You loved these. Inflict them on someone."))), /*#__PURE__*/React.createElement("div", {
    className: "film-grid"
  }, SD_DATA.diary.filter(d => d.rating >= 4.5).concat(SD_DATA.diary.slice(0, 2)).slice(0, 6).map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(FilmCard, {
    film: d.film,
    rating: d.rating,
    onOpen: f => go({
      screen: 'film',
      id: f
    }),
    width: "100%"
  }), /*#__PURE__*/React.createElement("button", {
    className: "sd-btn sd-btn--primary sd-btn--sm",
    style: {
      marginTop: 8,
      width: '100%',
      justifyContent: 'center'
    },
    onClick: () => openSend(d.film)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 14
  }), " Send"))))));
}

/* ---------------- FILM DETAIL ---------------- */
function FilmDetail({
  id,
  go,
  openSend
}) {
  const f = SD_DATA.films[id];
  const [myRating, setMyRating] = useState(0);
  const where = SD_DATA.streaming[id] || ['Not streaming'];
  const comments = [{
    person: 'tisha',
    text: 'i have watched this four times this year. do not perceive me ★★★★★',
    when: '2d',
    likes: 14,
    liked: true
  }, {
    person: 'manvi',
    text: 'good. annoyingly good. i wanted to dislike it and could not',
    when: '1mo',
    likes: 8
  }, {
    person: 'rohan',
    text: 'the train scene lives in my head rent free',
    when: '3w',
    likes: 21
  }];
  const alsoRated = [{
    person: 'rohan',
    rating: 4.5
  }, {
    person: 'manvi',
    rating: 4
  }, {
    person: 'tisha',
    rating: 5
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "detail-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-band__bg",
    style: {
      background: f.pp
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "detail-in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Poster, {
    film: id,
    className: "detail-poster"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "link-more",
    style: {
      marginBottom: 12
    },
    onClick: () => go({
      screen: 'home'
    })
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("h1", {
    className: "display-m",
    style: {
      margin: 0
    }
  }, f.title), /*#__PURE__*/React.createElement("div", {
    className: "detail-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, f.year), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, f.runtime), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, f.cert), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, "dir. ", f.dir)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, f.genres.map(g => /*#__PURE__*/React.createElement(Tag, {
    key: g
  }, g))), /*#__PURE__*/React.createElement("div", {
    className: "rating-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Your rating"), /*#__PURE__*/React.createElement(StarInput, {
    value: myRating,
    onChange: setMyRating,
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    className: "meta",
    style: {
      marginTop: 6
    }
  }, myRating ? `You: ${myRating.toFixed(1)}` : 'Tap to rate')), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Sawdust average"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sd-rating-num",
    style: {
      fontSize: 30
    }
  }, f.avg.toFixed(1)), /*#__PURE__*/React.createElement(Stars, {
    value: f.avg,
    size: "md"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Friends who rated it"), /*#__PURE__*/React.createElement("div", {
    className: "friends-rated"
  }, alsoRated.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "fr"
  }, /*#__PURE__*/React.createElement(Avatar, {
    person: a.person,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      color: 'var(--gold)'
    }
  }, a.rating.toFixed(1))))))), /*#__PURE__*/React.createElement("div", {
    className: "detail-acts"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    icon: "send",
    onClick: () => openSend(id)
  }, "Recommend to a friend"), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    icon: "list-plus"
  }, "Add to a list"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    icon: "check"
  }, "Mark watched")), /*#__PURE__*/React.createElement("div", {
    className: "where"
  }, /*#__PURE__*/React.createElement("span", {
    className: "overline"
  }, "Where to watch"), where.map(w => /*#__PURE__*/React.createElement("span", {
    key: w,
    className: "sd-chip",
    style: {
      cursor: 'default'
    }
  }, w))), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      maxWidth: 560,
      marginTop: 22
    }
  }, f.synopsis)))), /*#__PURE__*/React.createElement("div", {
    className: "screen",
    style: {
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ttl"
  }, "What your people said"), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, comments.length, " comments")), /*#__PURE__*/React.createElement(CommentThread, {
    comments: comments
  })));
}
Object.assign(window, {
  HomeScreen,
  FilmDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/screens2.jsx
try { (() => {
/* Sawdust web app — screens (lists, profile, friends) */

/* ---------------- LISTS OVERVIEW ---------------- */
function ListsScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-m",
    style: {
      margin: 0
    }
  }, "Lists"), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      margin: '4px 0 0'
    }
  }, "Ongoing watchlists you keep with the people you watch with.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
      gap: 20
    }
  }, SD_DATA.lists.map(l => /*#__PURE__*/React.createElement(ListCard, {
    key: l.id,
    list: l,
    onOpen: id => go({
      screen: 'list',
      id
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "sd-card",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 10,
      minHeight: 220,
      border: '1.5px dashed var(--line-strong)',
      background: 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 26,
    color: "var(--ink-faint)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      color: 'var(--ink-faint)'
    }
  }, "Start a new list"))));
}

/* ---------------- SHARED LIST ---------------- */
function ListScreen({
  id,
  go,
  openSend,
  rate
}) {
  const list = SD_DATA.lists.find(l => l.id === id);
  const [filter, setFilter] = useState('all');
  const filters = [['all', 'All'], ['unwatched', 'Unwatched'], ['watched', 'Watched'], ['disagree', 'You disagree']];
  let rows = list.films;
  if (filter === 'unwatched') rows = rows.filter(r => !r.watched);
  if (filter === 'watched') rows = rows.filter(r => r.watched);
  if (filter === 'disagree') rows = rows.filter(r => r.you != null && r.them != null && Math.abs(r.you - r.them) >= 1.5);
  const other = list.members.find(m => m !== 'you');
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("button", {
    className: "link-more",
    style: {
      marginBottom: 16
    },
    onClick: () => go({
      screen: 'lists'
    })
  }, "\u2190 All lists"), /*#__PURE__*/React.createElement("div", {
    className: "list-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-m",
    style: {
      margin: 0
    }
  }, list.title), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      margin: '4px 0 12px',
      fontStyle: 'italic'
    }
  }, list.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatars"
  }, list.members.map(m => /*#__PURE__*/React.createElement(Avatar, {
    key: m,
    person: m,
    size: 30
  }))), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, list.members.map(m => SD_DATA.people[m].name).join(' · ')))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    icon: "plus",
    onClick: () => openSend(null)
  }, "Add a film")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '20px 0'
    }
  }, filters.map(([k, lbl]) => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    active: filter === k,
    onClick: () => setFilter(k)
  }, lbl))), /*#__PURE__*/React.createElement("div", {
    className: "list-rows"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lrow",
    style: {
      borderBottom: '1px solid var(--line-strong)',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    className: "who"
  }, "You"), /*#__PURE__*/React.createElement("span", {
    className: "who"
  }, SD_DATA.people[other].name), /*#__PURE__*/React.createElement("span", null)), rows.map((r, i) => {
    const f = SD_DATA.films[r.film];
    return /*#__PURE__*/React.createElement("div", {
      className: "lrow",
      key: i
    }, /*#__PURE__*/React.createElement(Poster, {
      film: r.film,
      hover: true,
      onClick: () => go({
        screen: 'film',
        id: r.film
      }),
      style: {
        cursor: 'pointer'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "h4",
      style: {
        cursor: 'pointer'
      },
      onClick: () => go({
        screen: 'film',
        id: r.film
      })
    }, f.title), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, f.year, " \xB7 added by ", r.addedBy === 'you' ? 'you' : SD_DATA.people[r.addedBy].name), r.watched ? /*#__PURE__*/React.createElement(Tag, {
      tone: "watched"
    }, "Watched") : /*#__PURE__*/React.createElement("span", {
      className: "sd-tag"
    }, "Unwatched")), /*#__PURE__*/React.createElement("div", {
      className: "status"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "You"), r.you != null ? /*#__PURE__*/React.createElement(Stars, {
      value: r.you
    }) : /*#__PURE__*/React.createElement("span", {
      className: "not-yet"
    }, "not yet")), /*#__PURE__*/React.createElement("div", {
      className: "status"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, SD_DATA.people[other].name), r.them != null ? /*#__PURE__*/React.createElement(Stars, {
      value: r.them
    }) : /*#__PURE__*/React.createElement("span", {
      className: "not-yet"
    }, "waiting\u2026")), /*#__PURE__*/React.createElement("span", {
      className: "lrow-ov ico",
      style: {
        color: 'var(--ink-faint)',
        cursor: 'pointer',
        fontSize: 18
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "more-horizontal"
    })));
  })));
}

/* ---------------- FRIENDS ---------------- */
function FriendsScreen({
  go,
  openSend
}) {
  const friends = ['manvi', 'tisha', 'rohan'];
  const recent = {
    manvi: 'whiplash',
    tisha: 'mood',
    rohan: 'eeaao'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-m",
    style: {
      margin: 0
    }
  }, "Friends"), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      margin: '4px 0 0'
    }
  }, "The people whose taste you trust. Or tolerate.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 18
    }
  }, friends.map(id => {
    const p = SD_DATA.people[id];
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      className: "sd-card",
      style: {
        padding: 18,
        display: 'flex',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => go({
        screen: 'profile',
        id
      }),
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      person: id,
      size: 52
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "h3",
      style: {
        cursor: 'pointer'
      },
      onClick: () => go({
        screen: 'profile',
        id
      })
    }, p.name), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, "last watched \xB7 ", SD_DATA.films[recent[id]].title)), /*#__PURE__*/React.createElement(Btn, {
      variant: "secondary",
      size: "sm",
      icon: "send",
      onClick: () => openSend(null)
    }, "Send"));
  })));
}

/* ---------------- PROFILE / DIARY ---------------- */
function ProfileScreen({
  id,
  go,
  openSend
}) {
  const p = SD_DATA.people[id] || SD_DATA.people.you;
  const isYou = (id || 'you') === 'you';
  const [tab, setTab] = useState('diary');
  const bio = isYou ? 'Sends too many films. Rates honestly. Sorry in advance.' : 'Watches everything twice. Trust the ratings.';
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-head"
  }, /*#__PURE__*/React.createElement(Avatar, {
    person: p.id,
    className: "big-av"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "display-m",
    style: {
      margin: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      margin: '2px 0 0',
      fontStyle: 'italic'
    }
  }, bio), /*#__PURE__*/React.createElement("div", {
    className: "profile-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "128"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "films")), /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "24"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "this year")), /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, SD_DATA.lists.length), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "lists")), /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "friends")))), !isYou && /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    icon: "send",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => openSend(null)
  }, "Send a film")), /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, ['diary', 'lists', 'ratings'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: tab === t ? 'on' : '',
    onClick: () => setTab(t)
  }, t[0].toUpperCase() + t.slice(1)))), tab === 'diary' && /*#__PURE__*/React.createElement("div", {
    className: "film-grid"
  }, SD_DATA.diary.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(Poster, {
    film: d.film,
    hover: true,
    onClick: () => go({
      screen: 'film',
      id: d.film
    }),
    style: {
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    value: d.rating
  }), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, d.when))))), tab === 'lists' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
      gap: 20
    }
  }, SD_DATA.lists.map(l => /*#__PURE__*/React.createElement(ListCard, {
    key: l.id,
    list: l,
    onOpen: lid => go({
      screen: 'list',
      id: lid
    })
  }))), tab === 'ratings' && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, SD_DATA.diary.map((d, i) => {
    const f = SD_DATA.films[d.film];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '12px 0',
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement(Poster, {
      film: d.film,
      style: {
        width: 40,
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "h4"
    }, f.title), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, f.year, " \xB7 ", d.when)), /*#__PURE__*/React.createElement(Stars, {
      value: d.rating
    }));
  })));
}
Object.assign(window, {
  ListsScreen,
  ListScreen,
  FriendsScreen,
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/screens2.jsx", error: String((e && e.message) || e) }); }

})();
