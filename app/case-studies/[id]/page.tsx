import CaseStudyComponent from '@/components/case-study-page';
import { getCaseStudyById } from '@/lib/case-studies.data';

export default async function CaseStudyPage(props: {
	params: Promise<{ id: string }>;
}) {
	const params = await props.params;
	const study = getCaseStudyById(parseInt(params.id));

	if (!study) {
		return (
			<div className="min-h-screen bg-[#0F1419] flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-[#F8FAFC] mb-4">
						Case Study Not Found
					</h1>
					<p className="text-[#94A3B8]">
						The case study you're looking for doesn't exist.
					</p>
				</div>
			</div>
		);
	}

	return <CaseStudyComponent study={study} />;
}
