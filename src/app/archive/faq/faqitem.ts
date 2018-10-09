export class Faqitem {
	q: String;
	a: String;
}
export const FAQITEMS: Faqitem[]=[
	{
		q:"Why is a service provided in a lazy-loaded module visible only to that module?",
		a:"These providers are insulated from changes to application providers with the same lookup token. When the router creates a component within the lazy-loaded context, Angular prefers service instances created from these providers to the service instances of the application root injector. These providers are insulated from changes to application providers with the same lookup token. When the router creates a component within the lazy-loaded context, Angular prefers service instances created from these providers to the service instances of the application root injector."
	},
	{
		q:"What is Python good for?",
		a:"Python is a high-level general-purpose programming language that can be applied to many different classes of problems.The language comes with a large standard library that covers areas such as string processing (regular expressions, Unicode, calculating differences between files), Internet protocols (HTTP, FTP, SMTP, XML-RPC, POP, IMAP, CGI programming), software engineering (unit testing, logging, profiling, parsing Python code), and operating system interfaces (system calls, filesystems, TCP/IP sockets). Look at the table of contents for The Python Standard Library to get an idea of what’s available. A wide variety of third-party extensions are also available. Consult the Python Package Index to find packages of interest to you."
	},
	{
		q:"How does the Python version numbering scheme work?",
		a:"Python versions are numbered A.B.C or A.B. A is the major version number – it is only incremented for really major changes in the language. B is the minor version number, incremented for less earth-shattering changes. C is the micro-level – it is incremented for each bugfix release. See PEP 6 for more information about bugfix releases."
	},
	{
		q:"How do I obtain a copy of the Python source?",
		a:"The latest Python source distribution is always available from python.org, at https://www.python.org/downloads/. The latest development sources can be obtained at https://github.com/python/cpython/."
	},
	{
		q:"I’ve never programmed before. Is there a Python tutorial?",
		a:"There are numerous tutorials and books available. The standard documentation includes The Python Tutorial."
	},
	{
		q:"Are there any published articles about Python that I can reference?",
		a:"It’s probably best to cite your favorite book about Python.Guido van Rossum and Jelke de Boer, “Interactively Testing Remote Servers Using the Python Programming Language”, CWI Quarterly, Volume 4, Issue 4 (December 1991), Amsterdam, pp 283–303."
	}
]