package com.vignesh.ppmtool.services;

import com.vignesh.ppmtool.domain.Project;
import com.vignesh.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
   @Autowired
    private ProjectRepository projectRepository;
    public Project saveOrUpdate(Project project)
    {
        return projectRepository.save(project);
    }

}
